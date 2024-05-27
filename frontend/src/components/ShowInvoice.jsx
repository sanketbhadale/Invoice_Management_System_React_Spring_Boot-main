import {Table ,TableBody, TableCell, TableHead, TableRow, Button, styled, Typography} from "@mui/material";

const TComp = styled(Table)({
    width : '100%',
    marginTop:20,
})

const THead = styled(TableHead)({
    backgroundColor : "black",
})

const THeadCell = styled(TableCell)({
    color:"white",
    fontSize : 18,
    textAlign : "center",
    borderRight : "1px solid white",
    width : 200
})

const TBodyCell = styled(TableCell)({
    fontSize : 16,
    textAlign : "center",
    borderRight : "1px solid black",
    borderBottom : "1px solid black"
})

const ShowInvoice = ({list, removeInvoice})=>
{
    return(
        <TComp>
            <THead>
                <TableRow>
                    <THeadCell>Vendor</THeadCell>
                    <THeadCell>Product</THeadCell>
                    <THeadCell>Amount</THeadCell>
                    <THeadCell>Date</THeadCell>
                    <THeadCell>Status</THeadCell>
                    <THeadCell>Action</THeadCell>
                </TableRow>
            </THead>
            <TableBody>
                {
                    list.length > 0 ?
                    list.map((invoice,index)=>(
                        <TableRow key={index}>
                            <TBodyCell>{invoice.vendor}</TBodyCell>
                            <TBodyCell>{invoice.product}</TBodyCell>
                            <TBodyCell>{invoice.amount}</TBodyCell>
                            <TBodyCell>{invoice.date}</TBodyCell>
                            <TBodyCell>{invoice.status}</TBodyCell>
                            <TBodyCell>
                                <Button 
                                    variant="contained" 
                                    onClick={()=>removeInvoice(invoice.id)}
                                >Mark Done</Button>
                            </TBodyCell>
                        </TableRow>
                    )) : <Typography>No pending invoices</Typography>
                }
            </TableBody>
        </TComp>
    )
}

export default ShowInvoice;

