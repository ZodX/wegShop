package com.zodx.webshop.entity;

import javax.persistence.*;

@Entity
@Table(name = "CART")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private Long product_id;

    @Column
    private String username;

    public Long getId() {
        return id;
    }

    public Long getProduct_id() {
        return product_id;
    }

    public String getUsername() {
        return username;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
