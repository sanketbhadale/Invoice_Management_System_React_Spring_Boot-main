package com.invoiceprocessingsystem.server.contreoller;

import com.invoiceprocessingsystem.server.entity.Invoice;
import com.invoiceprocessingsystem.server.service.InvoiceDao;
import com.invoiceprocessingsystem.server.service.InvoiceDaoImpl;
import jakarta.validation.Valid;
import jakarta.validation.ValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/invoice")
@CrossOrigin
@Validated
public class InvoiceController
{
    private InvoiceDao invoiceDao;

    @Autowired
    public InvoiceController(InvoiceDao invoiceDao)
    {
        this.invoiceDao = invoiceDao;
    }

    @PostMapping("/add")
    public ResponseEntity<Invoice> save(@RequestBody @Valid Invoice invoice, BindingResult bindingResult)
    {
        if (bindingResult.hasErrors()){
            throw new ValidationException(bindingResult.getAllErrors().toString());
        }

        Invoice savedInvoice = invoiceDao.saveInvoice(invoice);
        return ResponseEntity.ok(savedInvoice);
    }

    @GetMapping("/")
    public List<Invoice> getAll()
    {
        return invoiceDao.getAllInvoice();
    }

    @DeleteMapping("/{id}")
    public void deleteInvoice(@PathVariable int id)
    {
        invoiceDao.deleteInvoiceById(id);
    }
}
