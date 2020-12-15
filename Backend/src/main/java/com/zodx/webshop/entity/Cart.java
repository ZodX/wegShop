package com.zodx.webshop.entity;

import javax.persistence.*;

@Entity
@Table(name = "CART")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long product_id;

    @Column
    private Long user_id;

    public Long getId() {
        return id;
    }

    public Long getProduct_id() {
        return product_id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }
}
