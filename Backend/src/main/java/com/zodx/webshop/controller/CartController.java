package com.zodx.webshop.controller;

import com.zodx.webshop.entity.Cart;
import com.zodx.webshop.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "https://localhost:4200")
@RestController
@RequestMapping("/api/carts")
public class CartController {

    @Autowired
    CartService cartService;

    @GetMapping(path = "/getAllCarts")
    List<Cart> fetchCarts() {
        return cartService.getAllCarts();
    }

    @GetMapping(path = "/getAllCartsByUserId/{id}")
    List<Cart> getCartsByUserId(@PathVariable Long id) {
        return cartService.getAllCartsByUserId(id);
    }

    @GetMapping(path = "/{id}")
    Cart getById(@PathVariable Long id) {
        return cartService.getCartById(id);
    }

    @PostMapping("/newCart")
    @ResponseStatus(HttpStatus.CREATED)
    void newCart(@RequestBody Cart newCart) {
        cartService.addCart(newCart);
    }

    @DeleteMapping("/delete/{username}-{product_id}")
    void deleteCart(
            @PathVariable String username,
            @PathVariable Long product_id){
        cartService.deleteCartItem(username, product_id);
    }
}
