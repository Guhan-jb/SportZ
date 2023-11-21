package com.sportproducts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sportproducts.model.Order;
import com.sportproducts.model.OrderMapping;



public interface OrderMappingRepository extends JpaRepository<OrderMapping, Long> {
	 void deleteByProductPid(Long productPid);

	void deleteByOrderOid(Long orderId);

}
