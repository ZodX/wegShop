package com.zodx.webshop.error;

public class QuantityMinimumReachedException extends RuntimeException{

    public QuantityMinimumReachedException() {
        super("The given quantity number is lower than 0.");
    }
}
