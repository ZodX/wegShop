package com.zodx.webshop.error;

public class UserNamesDoesntMatchException extends RuntimeException{

    public UserNamesDoesntMatchException(String username, String getterUserName) {
        super("Usernames doesnt match: " + username + " - " + getterUserName);
    }
}
