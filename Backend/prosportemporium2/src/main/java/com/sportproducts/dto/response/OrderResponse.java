package com.sportproducts.dto.response;

import java.util.Date;
import java.util.List;

import com.sportproducts.model.Products;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderResponse {
    private Long oid;
    private Date orderDate;
    private Long orderTotal;
    private String orderAddress;
    private String paymentMode;
    private List<Products> products;
}