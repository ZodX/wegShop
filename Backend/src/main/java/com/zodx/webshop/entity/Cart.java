package com.zodx.webshop.entity;

import javax.persistence.*;

@Entity
@Table(name = "CART")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String product_id;

    public Long getId() {
        return id;
    }

    public String getProduct_id() {
        return product_id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setProduct_id(String product_id) {
        this.product_id = product_id;
    }
}
