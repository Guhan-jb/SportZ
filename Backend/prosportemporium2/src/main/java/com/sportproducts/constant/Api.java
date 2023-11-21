package com.sportproducts.constant;

import java.util.Arrays;
import java.util.List;

public class Api {
    public static final String DEFAULT = "http://localhost:8181";
    public static final String AUTH = "/api/auth";
    public static final String USER = "/api/user";
    public static final String PRODUCT = "/api/product";
    public static final String ORDER = "/api/order";
    public static final List<String> HEADERS = Arrays.asList("Authorization", "Content-Type");
    public static final List<String> METHODS = Arrays.asList("GET", "POST", "PUT", "DELETE");
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:3000");
}
