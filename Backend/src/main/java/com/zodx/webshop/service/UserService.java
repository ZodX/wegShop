package com.zodx.webshop.service;

import com.zodx.webshop.entity.User;
import com.zodx.webshop.error.*;
import com.zodx.webshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers() {
        return new ArrayList<>(userRepository.findAll());
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    public void addUser(User newUser) {
        List<User> users = getAllUsers();
        for (User user : users) {
            if (newUser.getName().equals(user.getName())) {
                throw new UserAlreadyExistsException(newUser.getName());
            }
        }
        userRepository.save(newUser);
    }

    public void modifyUser(Long id, User modifiedUser) {
        if (modifiedUser.getId() < 1) {
            throw new IdMinimumReachedException(id);
        }
        userRepository.findById(id)
                .map(x -> {
                    x.setName(modifiedUser.getName());
                    x.setPassword(modifiedUser.getPassword());
                    return userRepository.save(x);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }
}
