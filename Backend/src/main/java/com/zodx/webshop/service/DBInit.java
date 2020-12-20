package com.zodx.webshop.service;

import com.zodx.webshop.entity.Product;
import com.zodx.webshop.entity.User;
import com.zodx.webshop.repository.ProductRepository;
import com.zodx.webshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class DBInit implements CommandLineRunner {

    UserRepository userRepository;

    ProductRepository productRepository;

    PasswordEncoder passwordEncoder;

    public DBInit(UserRepository userRepository, ProductRepository productRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        this.userRepository.deleteAll();
        this.productRepository.deleteAll();

        User user = new User();
        user.setUserame("admin");
        user.setPassword(passwordEncoder.encode("admin"));
        user.setRole("ROLE_ADMIN");
        user.setOrder_counter(0L);
        this.userRepository.save(user);

        User user2 = new User();
        user2.setUserame("user");
        user2.setPassword(passwordEncoder.encode("haha"));
        user2.setRole("ROLE_USER");
        user2.setOrder_counter(0L);
        this.userRepository.save(user2);

        User user3 = new User();
        user3.setUserame("newuser");
        user3.setPassword(passwordEncoder.encode("hehe"));
        user3.setRole("ROLE_USER");
        user3.setOrder_counter(0L);
        this.userRepository.save(user3);

        Product product = new Product();
        product.setName("Bread");
        product.setDescription("500g");
        product.setPrice(2L);
        product.setQuantity(20L);
        this.productRepository.save(product);

        Product product2 = new Product();
        product2.setName("Pencil");
        product2.setDescription("A very useful tool to write things down on a paper.");
        product2.setPrice(4L);
        product2.setQuantity(20L);
        this.productRepository.save(product2);
    }
}
