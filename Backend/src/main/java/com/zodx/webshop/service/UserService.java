package com.zodx.webshop.service;

import com.zodx.webshop.entity.Cart;
import com.zodx.webshop.entity.User;
import com.zodx.webshop.error.CartNotFoundException;
import com.zodx.webshop.error.UserAlreadyExistsException;
import com.zodx.webshop.error.UserNotFoundException;
import com.zodx.webshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CartService cartService;

    public List<User> getAllUsers() {
        return new ArrayList<>(userRepository.findAll());
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(() -> new UserNotFoundException(username));
    }

    public Long getUserOrderCounterByUserName(String username) {
        return userRepository.findByUsername(username).get().getOrder_counter();
    }

    public void deleteUser(String username) {

        List<User> users = getAllUsers();

        for (User user : users) {
            if (user.getUsername().equals(username)) {
                userRepository.deleteById(user.getId());
            }
        }

        cartService.deleteCartItemsWithUsername(username);
    }
}
