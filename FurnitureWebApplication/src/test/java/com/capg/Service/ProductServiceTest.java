package com.capg.Service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertThat;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.capg.model.Product;
import com.capg.repository.ProductRepository;
import com.capg.service.ProductServiceImpl;

@SpringBootTest
public class ProductServiceTest {

	@Autowired    
    private ProductServiceImpl productServiceImpl;



       @MockBean    
    ProductRepository productrepo;



       @Test



       void testAddProduct()
    { 
           Product c1 = new Product();        
           c1.setProductId((long) 1);        
           c1.setProductName("Table");        
           



       Mockito.when(productrepo.save(c1)).thenReturn(c1);



       assertThat(productServiceImpl.createProduct(c1)).isEqualTo(c1);   
    }



       @Test    
    void testUpdateProduct()
    throws Throwable {        
    Product c1 = new Product();        
    c1.setProductId((long) 1);        
    c1.setProductName("Chair");       



       Optional<Product> c2 = Optional.of(c1);



       Mockito.when(productrepo.findById((long) 1)).thenReturn(c2);



       Mockito.when(productrepo.save(c1)).thenReturn(c1);       
    c1.setProductName("Bed");        



       assertThat(productServiceImpl.findProductById((long) 1)).isEqualTo(c1);  
     }



       @Test   
    void testGetProductById() throws Throwable {        
    Product c1 = new Product();        
    c1.setProductId((long) 1);              
    c1.setProductName("cupboard");              
    Optional<Product> c2 = Optional.of(c1);        
    Mockito.when(productrepo.findById((long) 1)).thenReturn(c2);        
    assertThat(productServiceImpl.findProductById((long) 1)).isEqualTo(c1);   
     }



  
}
