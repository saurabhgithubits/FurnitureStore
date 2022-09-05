package com.capg.service;

import java.util.List;

import com.capg.model.Product;

public interface ProductService {
	
	public Product createProduct(Product product);
	
	public Product findProductById(long id);
	
	public void deleteProduct(long id);
	
	public List<Product> findAllProducts();
	
	public Product getProduct(Long id);

	Product editProduct(Product product, long id);
	
	

	

	
}
