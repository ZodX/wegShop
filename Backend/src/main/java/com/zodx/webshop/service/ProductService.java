package com.zodx.webshop.service;

import com.zodx.webshop.entity.Cart;
import com.zodx.webshop.entity.Product;
import com.zodx.webshop.error.ProductAlreadyExistsException;
import com.zodx.webshop.error.ProductNotFoundException;
import com.zodx.webshop.error.QuantityMinimumReachedException;
import com.zodx.webshop.repository.CartRepository;
import com.zodx.webshop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CartRepository cartRepository;

    public List<Product> getAllProducts() {
        return new ArrayList<>(productRepository.findAll());
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
    }

    public void addProduct(Product newProduct) {
        List<Product> products = getAllProducts();
        for (Product product : products) {
            if (newProduct.getName().equals(product.getName())) {
                throw new ProductAlreadyExistsException(newProduct.getName());
            }
        }
        productRepository.save(newProduct);
    }

    public void deleteProduct(Long id) {
        List<Product> products = getAllProducts();
        List<Cart> carts = new ArrayList<>(cartRepository.findAll());

        for (Product product : products) {
            if (product.getId().equals(id)) {
                productRepository.deleteById(id);

                for (Cart cart : carts) {
                    if (cart.getProduct_id().equals(id)) {
                        cartRepository.deleteById(cart.getId());
                    }
                }

                return;
            }
        }
        throw new ProductNotFoundException(id);
    }

    public void modifyProduct(Long id, Product modifiedProduct) {
        if (modifiedProduct.getQuantity() < 0) {
            throw new QuantityMinimumReachedException();
        }
        productRepository.findById(id)
                .map(x -> {
                    x.setName(modifiedProduct.getName());
                    x.setQuantity(modifiedProduct.getQuantity());
                    x.setPrice(modifiedProduct.getPrice());
                    x.setDescription(modifiedProduct.getDescription());
                    return productRepository.save(x);
                }).orElseThrow(() -> new ProductNotFoundException(id));
    }
}
