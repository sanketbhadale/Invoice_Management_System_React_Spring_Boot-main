import { AppBar, Toolbar, Box, Typography, Button, TextField, styled } from "@mui/material";
import { useState } from "react";
import save from "../service/InvoiceService";

// material UI styling
const Component = styled(Box)({
  marginLeft: 30,
  "& > p": {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
  },

  "& > div": {
    marginRight: 20,
  },
});

const FlexBox = styled(Box)({
    display : "flex",
    flexFlow : "row",
    alignItems : "center",
    // padding : 10


})

const TableBox = styled(Box)({
    backgroundColor : "#1976D2",
    display : "flex",
    justifyContent : "space-around",
    alignItems : "center",
    // padding : 10
})

// handling field values

const invoiceObj = {
    vendor : '',
    product : '',
    amount : 0,
    date : '',
    status : 'pending'
}



const Invoice = ({setAddInvoice}) => 
{
    const [error, setError] = useState(false);
    const [invoice,setInvoice] = useState(invoiceObj);

    const check = ()=>{
        if(invoice.vendor===null || invoice.amount===null || invoice.date==null || invoice.product===null)
        {
            setError(true)
            console.log("Inside")
        }
        
    }

    const handleChange = (event)=>{
        setInvoice({...invoice, [event.target.name] : event.target.value})
    }

    const handleAdd = async()=>
    {
        
        try {
            await save({...invoice,amount:Number(invoice.amount)})
            setAddInvoice(false);
        } catch (error) {
            throw new Error(error)
        }
    }
        
    

    return (
        <Component>
            <Typography>Add Invoices</Typography>
            <TextField
                variant="standard"
                placeholder="Enter vendor name"
                type="text"
                value={invoice.vendor}
                name="vendor"
                onChange={(event) => handleChange(event)}
            />
            <TextField
                variant="standard"
                placeholder="Enter product name"
                type="text"
                value={invoice.product}
                name="product"
                onChange={(event) => handleChange(event)}
            />
            <TextField
                variant="standard"
                placeholder="Enter amount (in Rs.)"
                type="number"
                value={invoice.amount}
                name="amount"
                onChange={(event) => handleChange(event)}
            />
            <TextField
                variant="standard"
                placeholder="Enter date"
                type="date"
                value={invoice.date}
                name="date"
                onChange={(event) => handleChange(event)}
            />
            <Button variant="contained" onClick={handleAdd}>Add Invoice</Button>
        </Component>
  );
};

export default Invoice;
