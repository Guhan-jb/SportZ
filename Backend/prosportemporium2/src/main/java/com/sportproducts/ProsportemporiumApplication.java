package com.sportproducts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
		info =@Info(
				title = "Pro Sport Emporium",
				version = "1.1.2",
				description = "Sports E-commerce Website Backend",
				contact = @Contact(
						name = "Guhan",
						email = "jbguhan@gmail.com"
						)
				)
		)
@EnableFeignClients
@SpringBootApplication
public class ProsportemporiumApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProsportemporiumApplication.class, args);
	}

}
