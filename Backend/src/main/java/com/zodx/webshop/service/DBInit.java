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
        user.setPassword(passwordEncoder.encode("secret"));
        user.setRole("ROLE_ADMIN");
        this.userRepository.save(user);

        User user2 = new User();
        user2.setUserame("user");
        user2.setPassword(passwordEncoder.encode("haha"));
        user2.setRole("ROLE_USER");
        this.userRepository.save(user2);

        User user3 = new User();
        user3.setUserame("newuser");
        user3.setPassword(passwordEncoder.encode("hehe"));
        user3.setRole("ROLE_USER");
        this.userRepository.save(user3);

        for (int i = 0; i < 20; i++) {
            Product product = new Product();
            product.setName("Kenyer");
            product.setDescription("Edd meg");
            product.setPrice(100L);
            product.setQuantity(20L);
            this.productRepository.save(product);
        }
    }
}
