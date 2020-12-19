package com.zodx.webshop.service;

import com.zodx.webshop.entity.Cart;
import com.zodx.webshop.entity.Product;
import com.zodx.webshop.error.*;
import com.zodx.webshop.repository.CartRepository;
import com.zodx.webshop.repository.ProductRepository;
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

    @Autowired
    ProductService productService;

    public List<Cart> getAllCarts() {
        return new ArrayList<>(cartRepository.findAll());
    }

    public Cart getCartById(Long id) {
        return cartRepository.findById(id).orElseThrow(() -> new CartNotFoundException(id));
    }

    public void addCart(Cart newCart) {
//        List<Cart> carts = getAllCarts();
//        for (Cart cart : carts) {
//            if (newCart.getId().equals(newCart.getId())) {
//                throw new CartAlreadyExistsException(newCart.getId());
//            }
//        }
        List<Product> products = this.productService.getAllProducts();

        System.out.println("ADDING CARTITEM" + ":" + newCart.getProduct_id());

        for (Product product : products) {
            if (product.getId().equals(newCart.getProduct_id())) {
                if (product.getQuantity() < 1) {
                    throw new QuantityMinimumReachedException();
                } else {

                    Long quantity = product.getQuantity();
                    product.setQuantity(quantity - 1);
                    this.productService.modifyProduct(newCart.getProduct_id(), product);
                    break;
                }
            }
        }

        cartRepository.save(newCart);
    }

    public void deleteCartItem(String username, Long product_id) {

        List<Product> products = this.productService.getAllProducts();
        List<Cart> carts = getAllCarts();
        Boolean found = false;

        for(Cart cart : carts) {
            if (cart.getUsername().equals(username) && cart.getProduct_id().equals(product_id)) {
                cartRepository.deleteById(cart.getId());
                found = true;
                break;
            }
        }
        
        if (found) {
            for (Product product : products) {
                if (product.getId().equals(product_id)) {
                    Long quantity = product.getQuantity();
                    product.setQuantity(quantity + 1);
                    this.productService.modifyProduct(product.getId(), product);
                    return;
                }
            }
        }
        throw new CartNotFoundException(username, product_id);
    }
}
