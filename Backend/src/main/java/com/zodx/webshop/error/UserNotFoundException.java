package com.zodx.webshop.error;

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(Long id) {
        super("User with " + id + " ID doesnt exists.");
    }
}
