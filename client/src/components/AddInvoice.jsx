import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { saveInvoice } from "../services/api";

const AddInvoice = () => {
    const defaultObj = {
        vendor: '',
        product: '',
        amount: 0,
        date: '',
        action: 'pending'
    };

    const [invoice, setInvoice] = useState(defaultObj);

    const onValueChange = (e) => {
        setInvoice({ ...invoice, [e.target.name]: e.target.value });
    };

    const addNewInvoice = async () => {
        await saveInvoice({ ...invoice, amount: Number(invoice.amount) });
    };

    return (
        <div>
            <p>Add Invoice</p>
            <TextField variant="standard" placeholder="Enter Vendor Name" onChange={onValueChange} name="vendor" />
            <TextField variant="standard" placeholder="Enter Product Name" onChange={onValueChange} name="product" />
            <TextField variant="standard" placeholder="Enter Amount" type="number" onChange={onValueChange} name="amount" />
            <TextField variant="standard" placeholder="Enter Date" type="date" onChange={onValueChange} name="date" />
            <Button variant="contained" onClick={addNewInvoice}>
                ADD
            </Button>
        </div>
    );
};

export default AddInvoice;
