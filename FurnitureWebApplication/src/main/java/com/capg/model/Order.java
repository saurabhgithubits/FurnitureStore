package com.capg.model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Entity
@Table(name = "orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long orderId;
	
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date orderDate;
	
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date deliveryDate;
	
	private DeliveryStatus status;
	
	private double amount;
	
    @ManyToOne(cascade = CascadeType.ALL, optional = false)
	@JoinColumn(name="user_id")
    private User user;
    
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "order_products",
        joinColumns = @JoinColumn(name = "order_id"),
        inverseJoinColumns = @JoinColumn(name = "product_id"))
	private List<Product> products = new ArrayList<>();
	

}
