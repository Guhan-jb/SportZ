package com.sportproducts.dto.request;

import java.util.List;

import com.sportproducts.dto.info.ProductInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {
    private String orderAddress;
    private String paymentMode;
    private Long uid;
    private List<ProductInfo> product;
}
