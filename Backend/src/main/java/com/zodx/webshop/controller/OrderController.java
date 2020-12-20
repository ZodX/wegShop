package com.zodx.webshop.controller;

import com.zodx.webshop.entity.Order;
import com.zodx.webshop.entity.User;
import com.zodx.webshop.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping(path = "/getAllOrders")
    List<Order> fetchOrders() {
        return orderService.getAllOrders();
    }

    @PostMapping(path = "/getAllOrdersByUser/{username}")
    List<Order> getOrdersByUser(
            @PathVariable String username,
            @RequestBody User getterUser) {
        return orderService.getAllOrdersByUser(username, getterUser);
    }

    @GetMapping(path = "/{id}")
    Order getById(@PathVariable Long id) {
        return orderService.getOrderById(id);
    }

    @PostMapping("/newOrder")
    @ResponseStatus(HttpStatus.CREATED)
    void newOrder(@RequestBody Order newOrder) {
        orderService.addOrder(newOrder);
    }
}

