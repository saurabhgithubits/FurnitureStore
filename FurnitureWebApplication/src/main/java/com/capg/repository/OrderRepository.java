package com.capg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capg.model.Order;
@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

}
