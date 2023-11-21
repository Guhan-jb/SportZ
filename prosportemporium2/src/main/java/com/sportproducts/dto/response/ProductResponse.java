package com.sportproducts.dto.response;

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
public class ProductResponse {
    private long pid;
    private String productName;
    private float productPrice;
    private String productImage;
    private long productQuantity;
    private String description;
   
}
