import { Box, Typography, Button, styled } from "@mui/material";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Invoice from "../components/Invoice";
import ShowInvoice from "../components/ShowInvoice";
import { getAllInvoices, deleteInvoice } from "../service/InvoiceService";

const Component = styled(Box)({
  "& > h4": {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },

  "& > Button": {
    marginLeft: 20,
  },
});

const HomePage = () => 
{
  const[list, setList] = useState([]);

  const [toggle, setToggle] = useState(false);

  const handleToggle = ()=> {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  const removeInvoices = async (id)=>{
    try {
        await deleteInvoice(id)
        const updatedInvoice = list.filter(invoice => invoice.id !== id)
        setList(updatedInvoice)
    } catch (error) {
        console.log(`error : ${error}`)
    }
}

  useEffect(()=>{

        const fetchData = async()=>{
          
          const response = await getAllInvoices();
          response && response.data && setList(response.data);
        };

        fetchData();

  },[toggle])

  return (
    <>
      <Header />
      <Component>
        <Typography variant="h4">Pending Invoices</Typography>
        {!toggle && (
          <Button
            variant="contained"
            onClick={handleToggle}
          >
            Add Invoice
          </Button>
        )}
      </Component>

      {toggle && <Invoice setAddInvoice = {setToggle} />}

      <ShowInvoice list={list} removeInvoice={removeInvoices}/>
    </>
  );
};

export default HomePage;
