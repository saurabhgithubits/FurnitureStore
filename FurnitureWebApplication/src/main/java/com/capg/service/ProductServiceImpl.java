package com.capg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.capg.model.Product;
import com.capg.repository.ProductRepository;

@Transactional
@Service
public class ProductServiceImpl  implements ProductService{
	
	@Autowired
	private ProductRepository productRepo;
	 


	@Override
	public Product editProduct(Product product, long id) {
		Product existProduct = productRepo.findById(id).orElse(null);
		existProduct.setProductName(product.getProductName());
		existProduct.setDescription(product.getDescription());
//	existProduct.setImage(product.getImage());
		existProduct.setPrice(product.getPrice());
		return productRepo.save(existProduct);
	}

	@Override
	public Product findProductById(long id) {
		return productRepo.findById(id).orElse(null);
	}

	@Override
	public void deleteProduct(long id) {
		productRepo.deleteById(id);
		
	}

	@Override
	public List<Product> findAllProducts() {
		return productRepo.findAll();
	}

	@Override
	public Product getProduct(Long id) {
		return productRepo.findById(id).orElse(null);
	}

	@Override
	public Product createProduct(Product product) {
		Product p = productRepo.save(product);
		return p;
	}

}



		


