package com.zodx.webshop.error;

public class CartNotFoundException extends RuntimeException{

    public CartNotFoundException(Long id) {
        super("Cart record with " + id + " id not found.");
    }

    public CartNotFoundException(Long user_id, Long product_id) {
        super("Cart record with " + user_id + " user_id and " + product_id + " product_id not found.");
    }
}
