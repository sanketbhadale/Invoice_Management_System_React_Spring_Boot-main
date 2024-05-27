-- if exists truncate database Invoice;

drop database if exists Invoice_Processing_System;
create database Invoice_Processing_System;

use Invoice_Processing_System;

drop table if exists invoice ;
create table invoice(
	id int PRIMARY KEY,
    vendor VARCHAR(50) not null,
    product VARCHAR(50) not null,
    amount BIGINT not null,
    date VARCHAR(50) not null,
    status VARCHAR(50) DEFAULT 'pending'
);

CREATE TABLE invoice (
    id INT PRIMARY KEY,
    vendor VARCHAR(50) NOT NULL,
    product VARCHAR(50) NOT NULL,
    amount BIGINT NOT NULL,
    date DATE NOT NULL,
    status VARCHAR(50) DEFAULT 'pending'
);




