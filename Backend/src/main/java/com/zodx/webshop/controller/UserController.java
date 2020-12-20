package com.zodx.webshop.controller;

import com.zodx.webshop.entity.User;
import com.zodx.webshop.service.UserService;
import com.zodx.webshop.service.UserServiceDeprecated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserServiceDeprecated userServiceDeprecated;

    @Autowired
    UserService userService;

    @GetMapping(path = "/getAllUsers")
    List<User> fetchUsers() {
        return userServiceDeprecated.getAllUsers();
    }

    @GetMapping(path = "/{id}")
    User getById(@PathVariable Long id) {
        return userServiceDeprecated.getUserById(id);
    }

    @GetMapping("/{username}")
    User getByUsername(
            @PathVariable String username) {
        return userService.getUserByUsername(username);
    }

    @PostMapping("/getOrderCounter/{username}")
    Long getOrderCount(
            @PathVariable String username,
            @RequestBody User user
    ) {
        return userService.getUserOrderCounterByUserName(username, user);
    }

    @PostMapping("/newUser")
    @ResponseStatus(HttpStatus.CREATED)
    void newUser(
            @RequestBody
            User newUser) {
        userServiceDeprecated.addUser(newUser);
    }

    @PutMapping("/modify/{id}")
    void modifyUser(
            @PathVariable Long id,
            @RequestBody User modifiedUser) {
        userServiceDeprecated.modifyUser(id, modifiedUser);
    }

    @PutMapping("incOrderCounter/{username}")
    void incOrderCounter(
            @PathVariable String username,
            @RequestBody User modifiedUser) {
        userServiceDeprecated.incUserOrderCounter(username, modifiedUser);
    }

    @DeleteMapping("/delete/{username}")
    void deleteUser(
            @PathVariable String username) {
        userService.deleteUser(username);
    }
}
