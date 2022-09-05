package com.capg.model;

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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "carts")
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long cartId;
		
    @ManyToOne(cascade = CascadeType.ALL, optional = false)
		@JoinColumn(name="user_id")
	    private User user;
	
    @ManyToMany(cascade = CascadeType.ALL)
	    @JoinTable(name = "cart_products",
	        joinColumns = @JoinColumn(name = "cart_id"),
	        inverseJoinColumns = @JoinColumn(name = "product_id"))
		private List<Product> products = new ArrayList<>();
	
}
