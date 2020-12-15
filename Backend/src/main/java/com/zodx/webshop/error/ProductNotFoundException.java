package com.zodx.webshop.error;

public class ProductNotFoundException extends RuntimeException {

    public ProductNotFoundException(Long id) {
        super("User with " + id + " ID already exists.");
    }
}
