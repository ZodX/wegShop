package com.zodx.webshop.service;

import com.zodx.webshop.entity.Cart;
import com.zodx.webshop.entity.Order;
import com.zodx.webshop.entity.Product;
import com.zodx.webshop.error.ProductAlreadyExistsException;
import com.zodx.webshop.error.ProductNotFoundException;
import com.zodx.webshop.error.QuantityMinimumReachedException;
import com.zodx.webshop.repository.CartRepository;
import com.zodx.webshop.repository.OrderRepository;
import com.zodx.webshop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    public List<Order> getAllOrders() {
        return new ArrayList<>(orderRepository.findAll());
    }

    public Order getOrderById(Long id) {
        return orderRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
    }

    public void addOrder(Order newOrder) {
        orderRepository.save(newOrder);
    }
}
