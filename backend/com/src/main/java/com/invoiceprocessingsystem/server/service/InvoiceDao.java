package com.invoiceprocessingsystem.server.service;

import com.invoiceprocessingsystem.server.entity.Invoice;

import java.util.List;

public interface InvoiceDao
{
    List<Invoice> getAllInvoice();
    Invoice saveInvoice(Invoice invoice);
    void deleteInvoiceById(int id);
    Invoice updateInvoice(Invoice invoice);
}
