package com.capg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.model.Cart;
import com.capg.model.Product;
import com.capg.service.CartService;

@RestController
@RequestMapping(value = "/cart")
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200"},allowedHeaders = "*")
public class CartController {
	
	@Autowired
	private CartService cartService;
		
    @PutMapping("/addToCart/{userId}")
    public ResponseEntity<Cart> addProducts(@RequestBody Product product,@PathVariable int userId){
    	Cart c = cartService.addToCart(userId ,product);
    	return new ResponseEntity<Cart>(c, HttpStatus.OK);
    }
    
    @PutMapping("/removeFromCart/{userId}")
    public ResponseEntity<Cart> removeProducts(@RequestBody Product product,@PathVariable int userId){
    	Cart c = cartService.removeFromCart(userId ,product);
    	return new ResponseEntity<Cart>(c, HttpStatus.OK);
    }
    
    @GetMapping("/{userId}")
    public ResponseEntity<Cart> getCart(@PathVariable int userId){
    	Cart cart = cartService.viewCart(userId);
    	return new ResponseEntity<Cart>(cart, HttpStatus.OK);
    }


}
