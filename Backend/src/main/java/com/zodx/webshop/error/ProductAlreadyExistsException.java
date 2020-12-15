package com.zodx.webshop.error;

public class ProductAlreadyExistsException extends RuntimeException{

    public ProductAlreadyExistsException(String name) {
        super("User with " + name + " name already exists.");
    }
}
