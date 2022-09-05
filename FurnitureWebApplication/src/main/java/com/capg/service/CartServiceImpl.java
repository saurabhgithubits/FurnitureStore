package com.capg.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.model.Cart;
import com.capg.model.Product;
import com.capg.repository.CartRepository;

@Transactional
@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private CartRepository cartRepo;
	
	@Override
	public Cart addToCart(int userId, Product product) {
		Cart cart = cartRepo.getCartByUserId(userId);
		cart.getProducts().add(product);
		Cart c = cartRepo.save(cart);
		return c;
	}

	@Override
	public Cart removeFromCart(int userId, Product product) {
		Cart cart = cartRepo.getCartByUserId(userId);
		cart.getProducts().remove(product);
		Cart c = cartRepo.save(cart);
		return c;
	}

	@Override
	public Cart viewCart(int userId) {
		Cart cart = cartRepo.getCartByUserId(userId);
		return cart;
	}

	

}
