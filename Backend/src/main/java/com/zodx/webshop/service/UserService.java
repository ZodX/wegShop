package com.zodx.webshop.service;

import com.zodx.webshop.entity.Cart;
import com.zodx.webshop.entity.User;
import com.zodx.webshop.error.CartNotFoundException;
import com.zodx.webshop.error.UserAlreadyExistsException;
import com.zodx.webshop.error.UserNamesDoesntMatchException;
import com.zodx.webshop.error.UserNotFoundException;
import com.zodx.webshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
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
        List<User> users = getAllUsers();

        for (User user : users) {
            if (user.getUsername().equals(username)) {
                return user;
            }
        }
        throw new UserNotFoundException(username);
    }

    public Long getUserOrderCounterByUserName(String username, User getterUser) {
        if (username.equals(getterUser.getUsername()) || getterUser.getUsername().equals("admin")) {
            return userRepository.findByUsername(username).get().getOrder_counter();
        } else {
            throw new UserNamesDoesntMatchException(username, getterUser.getUsername());
        }
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
