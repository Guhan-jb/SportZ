	package com.sportproducts.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sportproducts.Service.OrderService;
import com.sportproducts.constant.Api;
import com.sportproducts.dto.request.OrderRequest;
import com.sportproducts.dto.response.CountResponse;
import com.sportproducts.dto.response.OrderResponse;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.ORDER)
@RequiredArgsConstructor
@Tag(name = "Order")
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/add")
    public ResponseEntity<String> saveOrder(@RequestBody OrderRequest request) {
        boolean isSaved = orderService.saveOrder(request);
        return isSaved ? ResponseEntity.status(200).body("Order saved successfully!")
                : ResponseEntity.badRequest().build();
    }

    @GetMapping("/get/{uid}")
    public ResponseEntity<List<OrderResponse>> getOrders(@PathVariable Long uid) {
        List<OrderResponse> orderList = orderService.getOrders(uid);
        return !orderList.isEmpty() ? ResponseEntity.ok().body(orderList) : ResponseEntity.notFound().build();
    }

    @GetMapping("/getCount")
    public ResponseEntity<CountResponse> orderCount() {
        CountResponse countResponse = orderService.orderCount();
        return countResponse.getCount() != 0 ? ResponseEntity.ok().body(countResponse)
                : ResponseEntity.noContent().build();
    }
    @GetMapping("/getUserCount/{uid}")
    public int userOrderCount(@PathVariable Long uid)
    {
    	 List<OrderResponse> orderList = orderService.getOrders(uid);
    	 return orderList.size() ;
    }

    @DeleteMapping("/delete/{orderId}")
    public ResponseEntity<String> deleteOrder(@PathVariable Long orderId) {
        boolean isDeleted = orderService.deleteOrder(orderId);
        return isDeleted
                ? ResponseEntity.status(200).body("Order deleted successfully!")
                : ResponseEntity.notFound().build();
    }
}
