package com.example.kirana.repository;

import com.example.kirana.model.Debt;
import com.example.kirana.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DebtRepository extends JpaRepository<Debt, Long> {
    List<Debt> findByCustomer(Customer customer);
}