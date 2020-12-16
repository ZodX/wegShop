package com.zodx.webshop.controller;

import com.zodx.webshop.entity.Product;
import com.zodx.webshop.entity.User;
import com.zodx.webshop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping(path = "/getAllUsers")
    List<User> fetchUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(path = "/{id}")
    User getById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/newUser")
    @ResponseStatus(HttpStatus.CREATED)
    void newUser(
            @RequestBody
            User newUser) {
        userService.addUser(newUser);
    }

    @PutMapping("/modify/{id}")
    void modifyUser(
            @PathVariable Long id,
            @RequestBody User modifiedUser) {
        userService.modifyUser(id, modifiedUser);
    }
}
