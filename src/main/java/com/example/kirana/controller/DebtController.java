package com.example.kirana.controller;

import com.example.kirana.model.Customer;
import com.example.kirana.model.Debt;
import com.example.kirana.repository.CustomerRepository;
import com.example.kirana.repository.DebtRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/debts")
public class DebtController {

    @Autowired
    private DebtRepository debtRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping
    public Debt addDebt(@RequestBody Debt debt) {
        if (debt.getDate() == null) debt.setDate(LocalDate.now());
        return debtRepository.save(debt);
    }

    @GetMapping("/customer/{customerId}")
    public List<Debt> getDebtsForCustomer(@PathVariable Long customerId) {
        Customer customer = customerRepository.findById(customerId).orElse(null);
        if (customer == null) return List.of();
        return debtRepository.findByCustomer(customer);
    }
}