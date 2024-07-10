import AddInvoice from "../components/AddInvoice";
import Header from "../components/Header";
import {Box,Button} from '@mui/material';
import React,{useState} from "react";
const Home=()=>{
    const[addInvoice,setAddInvoice]=useState(false);
    const toggleInvoice=()=>{
        setAddInvoice(true);
    }

    return(
        <div>
           <Header></Header>
           <Box>
           <p>Pending Invoices</p>
           <Button variant="contained"
                   onClick={()=>toggleInvoice()}
           
           
           >Add Invoice</Button>
           {addInvoice && <AddInvoice/>}
           </Box>
        </div>
    )
}
export default Home;