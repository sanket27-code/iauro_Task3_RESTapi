const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 4004;

app.get('/customer', (req, res)=>{
    const allCustomers = JSON.parse(fs.readFileSync('./customerData.json'));
    if(allCustomers.length == 0){
        res.send('No customer data found!');
    }
    res.send(allCustomers)
});

app.get('/customer/:name', (req, res)=>{
    const allCustomers = JSON.parse(fs.readFileSync('./customerData.json'));
    const specificCustomer = allCustomers.filter((customer)=>{
        return customer.firstName == req.params.name;
    })
    if(specificCustomer.length == 0){
        res.send('No customer data found!');
    }
    res.send(specificCustomer);
});

app.listen(PORT, ()=>{
    console.log(`server running on port: http://localhost:${PORT}`);
});