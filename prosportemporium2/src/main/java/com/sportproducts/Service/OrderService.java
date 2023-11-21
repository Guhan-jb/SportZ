package com.sportproducts.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sportproducts.dto.info.ProductInfo;
import com.sportproducts.dto.request.OrderRequest;
import com.sportproducts.dto.response.CountResponse;
import com.sportproducts.dto.response.OrderResponse;
import com.sportproducts.model.Order;
import com.sportproducts.model.OrderMapping;
import com.sportproducts.model.Products;
import com.sportproducts.model.User;
import com.sportproducts.repository.OrderMappingRepository;
import com.sportproducts.repository.OrderRepository;
import com.sportproducts.repository.ProductsRepository;
import com.sportproducts.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class OrderService {

    private final UserRepository userRepository;
    private final ProductsRepository productRepository;
    private final OrderRepository orderRepository;
    private final OrderMappingRepository orderMappingRepository;
    private final ProductService productService;

    
    public boolean saveOrder(OrderRequest request) {
        User user = userRepository.findByUid(request.getUid());
        List<ProductInfo> productInfoList = request.getProduct();
        long orderTotal = calculateOrderTotal(productInfoList);

        if (orderTotal <= 0) {
            throw new IllegalArgumentException("Order total must be greater than zero.");
        }

        try {
            Order order = createOrder(request, user, orderTotal, productInfoList);
            orderRepository.save(order);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    private Order createOrder(OrderRequest request, User user, long orderTotal, List<ProductInfo> productInfoList) {
        Order order = Order.builder()
                .orderDate(new Date())
                .orderAddress(request.getOrderAddress())
                .paymentMode(request.getPaymentMode())
                .user(user)
                .orderTotal(orderTotal)
                .orderMappings(request.getProduct().stream()
                        .map(productRequest -> {
                            Products product = productService.getProductModelId(productRequest.getPid());
                            if (product != null) {
                                return OrderMapping.builder().product(product).build();
                            } else {
                                throw new IllegalArgumentException("Invalid product ID: " + productRequest.getPid());
                            }
                        })
                        .collect(Collectors.toList()))
                .build();

        updateProductQuantities(productInfoList);

        return order;
    }

    private List<Products> updateProductQuantities(List<ProductInfo> productInfoList) {
        List<Products> updatedProducts = new ArrayList<>();

        for (ProductInfo productInfo : productInfoList) {
            Long productId = productInfo.getPid();
            Long quantity = productInfo.getQuantity();

            Products product = getProductOrThrow(productId);

            if (product.getProductQuantity() < quantity) {
                throw new IllegalArgumentException("Insufficient quantity for product ID: " + productId);
            }

            Products updatedProduct = createUpdatedProduct(product, quantity);
            productRepository.save(updatedProduct);
            updatedProducts.add(updatedProduct);
        }

        return updatedProducts;
    }

    private Products getProductOrThrow(Long productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("Product not found for ID: " + productId));
    }

    private Products createUpdatedProduct(Products product, Long quantity) {
        Products updatedProduct = new Products();
        updatedProduct.setPid(product.getPid());
        updatedProduct.setProductName(product.getProductName());
        updatedProduct.setProductPrice(product.getProductPrice());
        updatedProduct.setProductQuantity(product.getProductQuantity() - quantity);
        updatedProduct.setProductImage(product.getProductImage());
        updatedProduct.setDescription(product.getDescription());
        return updatedProduct;
    }

    private long calculateOrderTotal(List<ProductInfo> productInfoList) {
        return productInfoList.stream()
                .mapToLong(productInfo -> {
                    Products product = getProductOrThrow(productInfo.getPid());
                    if (product.getProductQuantity() < productInfo.getQuantity()) {
                        throw new IllegalArgumentException(
                                "Insufficient quantity for product ID: " + productInfo.getPid());
                    }
                    return (long) (product.getProductPrice() * productInfo.getQuantity());
                })
                .sum();
    }

    
    public List<OrderResponse> getOrders(Long uid) {
        return convertToOrderResponse(orderRepository.findAllByUserUid(uid));
    }

    public List<OrderResponse> convertToOrderResponse(List<Order> orders) {
        return orders.stream()
                .map(order -> {
                    OrderResponse.OrderResponseBuilder builder = OrderResponse.builder()
                            .oid(order.getOid())
                            .orderDate(order.getOrderDate())
                            .orderTotal(order.getOrderTotal())
                            .orderAddress(order.getOrderAddress())
                            .paymentMode(order.getPaymentMode());

                    List<Products> products = order.getOrderMappings().stream()
                            .map(OrderMapping::getProduct)
                            .collect(Collectors.toList());

                    builder.products(products);

                    return builder.build();
                })
                .collect(Collectors.toList());
    }

    
    public CountResponse orderCount() {
        long count = orderRepository.count();
        return CountResponse.builder().count(count).build();
    }
    public boolean deleteOrder(Long orderId) {
        orderRepository.deleteById(orderId);

        return true;
    }
}
