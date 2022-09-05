package com.capg.service;

import com.capg.model.Cart;
import com.capg.model.Product;

public interface CartService{
	
	public Cart addToCart(int userId,Product product);
	public Cart removeFromCart(int userId,Product product);
	public Cart viewCart(int userId);
}
