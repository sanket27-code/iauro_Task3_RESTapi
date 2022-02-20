const fs = require('fs');

exports.getAllCustomers = (req, res)=>{
    const allCustomers = JSON.parse(fs.readFileSync('./src/model/customerData.json'));
    if(allCustomers.length == 0){
        res.send('No customer data found!');
    }
    res.send(allCustomers);
}

exports.getOneCustomer = (req, res)=>{
    const allCustomers = JSON.parse(fs.readFileSync('./src/model/customerData.json'));
    const specificCustomer = allCustomers.filter((customer)=>{
        return customer.firstName == req.params.name;
    })
    if(specificCustomer.length == 0){
        res.send('No customer data found!');
    }
    res.send(specificCustomer);
}