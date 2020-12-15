package com.zodx.webshop.controller;

import com.zodx.webshop.entity.Product;
import com.zodx.webshop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping(path = "/getAllProducts")
    List<Product> fetchProducts() {
        return  productService.getAllProducts();
    }

    @GetMapping(path = "/{id}")
    Product getById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @PostMapping("/newProduct")
    @ResponseStatus(HttpStatus.CREATED)
    void newProduct(@RequestBody Product newProduct) {
        productService.addProduct(newProduct);
    }

    @DeleteMapping("/delete/{id}")
    void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }

    @PutMapping("/modify/{id}")
    void modifyProduct(
            @PathVariable Long id,
            @RequestBody Product modifiedProduct) {
        productService.modifyProduct(id, modifiedProduct);
    }
}
