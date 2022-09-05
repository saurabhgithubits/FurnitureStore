package com.capg.service;

import java.util.List;

import com.capg.model.Order;

public interface OrderService {

    public Order createOrder(Order order);
	
	public Order findOrderById(long id);
	
	public void deleteOrder(long id);
	
	public List<Order> findAllOrders();
   
	public List<Order> findAllOrdersByUser(long userId);
}
