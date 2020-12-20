package com.zodx.webshop.entity;

import javax.persistence.*;

@Entity
@Table(name = "ORDERS")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String username;

    @Column
    private Long order_number;

    @Column
    private Long product_id;

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public Long getOrder_number() {
        return order_number;
    }

    public Long getProduct_id() {
        return product_id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setOrder_number(Long order_number) {
        this.order_number = order_number;
    }

    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }
}
