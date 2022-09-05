package com.capg.Service;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.capg.model.Order;
import com.capg.repository.OrderRepository;
import com.capg.service.OrderServiceImpl;
;

@SpringBootTest
public class OrderServiceTest {

	@Autowired    
    private OrderServiceImpl orderServiceImpl;



       @MockBean    
    OrderRepository orderrepo;



       @Test



       void testAddorder()
    { 
           Order c1 = new Order();        
           c1.setOrderId((long) 1);        
            
           



       Mockito.when(orderrepo.save(c1)).thenReturn(c1);



       assertThat(orderServiceImpl.createOrder(c1)).isEqualTo(c1);   
    }



       @Test    
    void testUpdateorder()
    throws Throwable {        
    Order c1 = new Order();        
    c1.setOrderId((long) 1);               



       Optional<Order> c2 = Optional.of(c1);



       Mockito.when(orderrepo.findById((long) 1)).thenReturn(c2);



       Mockito.when(orderrepo.save(c1)).thenReturn(c1);       
         



       assertThat(orderServiceImpl.findOrderById((long) 1)).isEqualTo(c1);  
     }



       @Test   
    void testGetorderById() throws Throwable {        
    Order c1 = new Order();        
    c1.setOrderId((long) 1);                            
    Optional<Order> c2 = Optional.of(c1);        
    Mockito.when(orderrepo.findById((long) 1)).thenReturn(c2);        
    assertThat(orderServiceImpl.findOrderById((long) 1)).isEqualTo(c1);   
     }

  
}
