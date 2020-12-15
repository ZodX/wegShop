package com.zodx.webshop.error;

public class CartAlreadyExistsException extends RuntimeException{

    public CartAlreadyExistsException(Long id) {
        super("Cart with " + id + " ID already exists.");
    }
}
