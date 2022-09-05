package com.capg.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.model.DeliveryStatus;
import com.capg.model.Order;
import com.capg.model.Product;
import com.capg.repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepository orderRepo;
	
	@Override
	public Order createOrder(Order order) {
		order.setStatus(DeliveryStatus.IN_PROCESS);
		double sum = 0;
		for(Product p : order.getProducts()) {
			sum = sum + p.getPrice();
		}
		order.setAmount(sum);
		Order o = orderRepo.save(order);
		return o;
	}

	@Override
	public Order findOrderById(long id) {
		Order o = orderRepo.findById(id).get();
		return o;
	}

	@Override
	public void deleteOrder(long id) {
		orderRepo.deleteById(id);
	}

	@Override
	public List<Order> findAllOrders() {
		List<Order> orders = orderRepo.findAll();
		return orders;
	}
	
	public List<Order> findAllOrdersByUser(long userId) {
		List<Order> allOrders = orderRepo.findAll();
		List<Order> orders = new ArrayList<Order>();
		
		allOrders.forEach(i -> {
			if(i.getUser().getUserId()==userId) {
				orders.add(i);
			}
		});
		return orders;
	}
	

}
