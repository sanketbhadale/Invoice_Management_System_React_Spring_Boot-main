package com.invoiceprocessingsystem.server.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "invoice")
public class Invoice
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @Column(name = "vendor")
    @NotNull(message = "Vendor name required")
    @NotBlank(message = "Name cannot be blank")
    private String vendor;

    @Column(name = "product")
    @NotNull(message = "Product name required")
    private String product;

    @Column(name = "amount")
    @NotNull(message = "Amount required")
    private long amount;

    @Column(name = "date")
    @NotNull(message = "Date required")
    private String date;

    @Column(name = "status")
    private String status;

    public Invoice() {
    }

    public Invoice(String vendor, String product, long amount, String date, String status) {
        this.vendor = vendor;
        this.product = product;
        this.amount = amount;
        this.date = date;
        this.status = status;
    }

    public Invoice(int id, String vendor, String product, long amount, String date, String status) {
        this.id = id;
        this.vendor = vendor;
        this.product = product;
        this.amount = amount;
        this.date = date;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Invoice{" +
                "id=" + id +
                ", vendor='" + vendor + '\'' +
                ", product='" + product + '\'' +
                ", amount=" + amount +
                ", date='" + date + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
