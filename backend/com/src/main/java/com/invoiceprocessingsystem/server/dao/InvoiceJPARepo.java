package com.invoiceprocessingsystem.server.dao;

import com.invoiceprocessingsystem.server.entity.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceJPARepo extends JpaRepository<Invoice,Integer> {
}
