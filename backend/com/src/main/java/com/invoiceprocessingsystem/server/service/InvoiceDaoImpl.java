package com.invoiceprocessingsystem.server.service;

import com.invoiceprocessingsystem.server.dao.InvoiceJPARepo;
import com.invoiceprocessingsystem.server.entity.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class InvoiceDaoImpl implements InvoiceDao{

    private InvoiceJPARepo invoiceJPARepo;
    @Autowired
    public InvoiceDaoImpl(InvoiceJPARepo invoiceJPARepo){
        this.invoiceJPARepo = invoiceJPARepo;
    }
    @Override
    public List<Invoice> getAllInvoice() {
        return invoiceJPARepo.findAll();
    }
    @Override
    public Invoice saveInvoice(Invoice invoice) {
        return invoiceJPARepo.save(invoice);
    }
    @Override
    public void deleteInvoiceById(int id) {
        invoiceJPARepo.deleteById(id);
    }
    @Override
    public Invoice updateInvoice(Invoice invoice) {
        return invoiceJPARepo.save(invoice);
    }
}
