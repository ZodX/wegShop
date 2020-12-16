package com.zodx.webshop.error;

public class IdMinimumReachedException extends RuntimeException {

    public IdMinimumReachedException(Long id) {
        super("User ID: " + id + " not possible. (Lower than 1)");
    }
}
