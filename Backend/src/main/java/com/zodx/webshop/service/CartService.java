package com.zodx.webshop.service;

import com.zodx.webshop.entity.Cart;
import com.zodx.webshop.entity.Product;
import com.zodx.webshop.error.CartAlreadyExistsException;
import com.zodx.webshop.error.CartNotFoundException;
import com.zodx.webshop.error.ProductNotFoundException;
import com.zodx.webshop.error.UserNotFoundException;
import com.zodx.webshop.repository.CartRepository;
import com.zodx.webshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartService {

    @Autowired
    CartRepository cartRepository;

    @Autowired
    UserRepository userRepository;

    public List<Cart> getAllCarts() {
        return new ArrayList<>(cartRepository.findAll());
    }

    public Cart getCartById(Long id) {
        return cartRepository.findById(id).orElseThrow(() -> new CartNotFoundException(id));
    }

    public List<Cart> getAllCartsByUserId(Long id) {
        userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));

        ArrayList list = new ArrayList<>();

        List<Cart> carts = getAllCarts();
        for (Cart cart : carts) {
            if (cart.getUser_id().equals(id)) {
                list.add(cart);
            }
        }

        return list;
    }

    public void addCart(Cart newCart) {
        List<Cart> carts = getAllCarts();
        for (Cart cart : carts) {
            if (newCart.getId().equals(newCart.getId())) {
                throw new CartAlreadyExistsException(newCart.getId());
            }
        }
        cartRepository.save(newCart);
    }

    public void deleteCartItem(Long user_id, Long product_id) {
        List<Cart> carts = getAllCarts();
        for (Cart cart : carts) {
            if (cart.getUser_id().equals(user_id) && cart.getProduct_id().equals(product_id)) {
                cartRepository.deleteById(cart.getId());
                return;
            }
        }
        throw new CartNotFoundException(user_id, product_id);
    }
}
