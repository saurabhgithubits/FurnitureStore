package com.capg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.model.Order;
import com.capg.service.OrderService;

@RestController
@RequestMapping(value = "/order")
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200"},allowedHeaders = "*")
public class OrderController {

	@Autowired
	private OrderService orderService;

	@PostMapping("/add")
	Order addOrder(@RequestBody Order Order) {
		 return orderService.createOrder(Order);
	}
 
	@GetMapping("/findOrderById/{id}")
	Order findOrderById(@PathVariable long id) {
		return orderService.findOrderById(id);
	}

	@DeleteMapping("/deleteOrder/{id}")
	void deleteOrder(@PathVariable long id) {
		orderService.deleteOrder(id);
	}

	@GetMapping("/findAllOrders")
	List<Order> findAllOrders() {
		return orderService.findAllOrders();
	}
	
	@GetMapping("/OrdersById/{userId}")
	List<Order> ordersByUser(@PathVariable long userId) {
		return orderService.findAllOrdersByUser(userId);
	}

}
