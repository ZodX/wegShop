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

    @DeleteMapping("/delete/{user_id}-{product_id}")
    void deleteCart(
            @PathVariable Long user_id,
            @PathVariable Long product_id){
        //Long user_id = Long.parseLong(ids.substring(0, ids.indexOf("-")));
        //Long product_id = Long.parseLong(ids.substring(ids.indexOf("-"), ids.length()));

        cartService.deleteCartItem(user_id, product_id);
    }
}
