   package com.sportproducts.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.sportproducts.dto.request.ProductRequest;
import com.sportproducts.dto.response.CountResponse;
import com.sportproducts.dto.response.ProductResponse;
import com.sportproducts.model.Products;
import com.sportproducts.repository.ProductsRepository;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductService {

    private final ProductsRepository productRepository;


   
    public boolean saveProduct(ProductRequest request) {
        if (productRepository.findByProductName(request.getProductName()).isPresent()) {
            return false;
        }

        Products product = Products.builder()
                .productName(request.getProductName())
                .productPrice(request.getProductPrice())
                .productQuantity(request.getProductQuantity())
                .description(request.getDescription())
                .productImage(request.getProductImage())
                .build();

        productRepository.save(product);
        return true;
    }

    public List<ProductResponse> getAllProducts() {
        List<Products> productList = productRepository.findAll();

        return productList.stream()
                .map(this::mapProductToResponse)
                .collect(Collectors.toList());
    }

    
    public ProductResponse getProduct(Long pid) {
        Products product = productRepository.findByPid(pid);
        return mapProductToResponse(product);
    }

    
    public ProductResponse updateProduct(ProductRequest request, Long pid) {
        Products product = productRepository.findByPid(pid);

        if (product != null) {
            product.setProductName(request.getProductName());
            product.setProductPrice(request.getProductPrice());
            product.setProductQuantity(request.getProductQuantity());
            product.setDescription(request.getDescription());
            product.setProductImage(request.getProductImage());
            productRepository.save(product);

            return mapProductToResponse(product);
        } else {
            throw new EntityNotFoundException("Product with pid " + pid + " not found");
        }
    }


    public boolean deleteProduct(Long pid) {
        Products product = productRepository.findByPid(pid);

        if (product != null) {
            productRepository.deleteByPid(pid);
            return true;
        } else {
            return false;
        }
    }

    private ProductResponse mapProductToResponse(Products product) {
        return ProductResponse.builder()
                .pid(product.getPid())
                .productName(product.getProductName())
                .productPrice(product.getProductPrice())
                .productQuantity(product.getProductQuantity())
                .description(product.getDescription())
                .productImage(product.getProductImage())
                .build();
    }

    
    public Products getProductModelId(Long pid) {
        return productRepository.findByPid(pid);
    }

    
    public CountResponse productCount() {
        long count = productRepository.count();
        return CountResponse.builder().count(count).build();
    }
}
