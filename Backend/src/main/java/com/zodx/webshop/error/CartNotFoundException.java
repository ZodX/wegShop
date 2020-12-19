package com.zodx.webshop.error;

public class CartNotFoundException extends RuntimeException{

    public CartNotFoundException(Long id) {
        super("Cart record with " + id + " id not found.");
    }

    public CartNotFoundException(String username, Long product_id) {
        super("Cart record with " + username + " username and " + product_id + " product_id not found.");
    }
}
