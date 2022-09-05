package com.capg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.model.Product;
import com.capg.service.ProductService;


@RestController
@RequestMapping(value = "/product")
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200"},allowedHeaders = "*")
public class ProductController {

	@Autowired
	private ProductService productService;

	@PostMapping("/create")
	Product addProduct(@RequestBody Product product) {
		 return productService.createProduct(product);
	}
	
	@PutMapping("/editProduct/{id}")
	Product editProduct(@RequestBody Product product, @PathVariable long id) {
		 return productService.editProduct(product, id);
	}

	@GetMapping("/findProductById/{id}")
	Product findProductById(@PathVariable long id) {
		return productService.findProductById(id);
	}

	@DeleteMapping("/deleteProduct/{id}")
	void deleteProduct(@PathVariable long id) {
		productService.deleteProduct(id);
	}

	@GetMapping("/findAllProducts")
	List<Product> findAllProducts() {
		return productService.findAllProducts();
	}
}
