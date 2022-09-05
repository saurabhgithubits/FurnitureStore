package com.capg.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.exception.ResourceNotFoundException;
import com.capg.model.Cart;
import com.capg.model.User;
import com.capg.repository.CartRepository;
import com.capg.repository.UserRepository;


@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CartRepository cartRepo;

	@Override
	public User addUser(User user) {
		if(user == null) {
			throw new ResourceNotFoundException("Invalid Customer Data");
		}
		User u = (User) userRepository.saveAndFlush(user);
		Cart cart = new Cart();
		cart.setUser(u);
		Cart c = cartRepo.save(cart);
		return u;
	}

	@Override 
	public User updateUser(User user) {
		User u =(User) userRepository.saveAndFlush(user);
		return u;
	}

	@Override
	public String removeUserById(int userId) { 
		userRepository.deleteById(userId); return "User deleted"; 
	}

	@Override 
	public List<User> showAllUsers(){
		List<User> users = userRepository.findAll();
		List<User> userList = new ArrayList<User>();
		users.forEach(i -> {
			User u = i;
//			u.setBooking(null);
			userList.add(u);
				});
		return userList;
	}

	@Override
	public User showUserById(int userId) { 
		User u = (User) userRepository.findById(userId).get(); 
//		u.setBooking(null);
		return u;
	}


	@Override
	public boolean validateUser(String userName, String password) {
		Optional<User> user = userRepository.findByUsernameAndPassword(userName, password);
		if(user.get() == null)
			return false;
		else
			return true;
	}
	public Optional<User> viewByUserName(String userName, String password) {
		Optional<User> user = userRepository.findByUsernameAndPassword(userName, password);
		if(user.get() == null)
			throw new ResourceNotFoundException("Customer not created");
		return user;		
	}
	
	public boolean findIfIdPresent(int userId) {
		if(userRepository.findById(userId).isPresent())
			return true;
	    return false;
	}
	
	public boolean userPresentByUsername(String username){
		User user = this.userRepository.findByUsername(username);
		if(user == null)
			return false;
		return true;
		
	}
	
}