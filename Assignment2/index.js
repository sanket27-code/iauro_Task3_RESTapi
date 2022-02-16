const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 4006;
app.use(express.json());

// GET REQUEST for getting all Products
app.get('/product', (req, res)=>{
    const allProducts = JSON.parse(fs.readFileSync('./productData.json'));
    if(allProducts.length == 0){
        res.send('No customer data found!');
    }
    res.send(allProducts)
});

// POST REQUEST for inserting Product
app.post('/product', (req, res)=>{
    const allProducts = JSON.parse(fs.readFileSync('./productData.json'));
    const newProduct = req.body;
    allProducts.push(newProduct);

    fs.writeFileSync('productData.json', JSON.stringify(allProducts,null,1));
    res.send(newProduct);
});

// GET REQUEST for getting particular Product by Name
app.get('/product/:name', (req, res)=>{
    const allProducts = JSON.parse(fs.readFileSync('./productData.json'));
    const specificProduct = allProducts.filter((product)=>{
        return product.product == req.params.name;
    })
    if(specificProduct.length == 0){
        res.send('No Product data found!');
    }
    res.send(specificProduct);
});

// PATCH REQUEST for updating particular Product by Name
app.patch('/product/:name', (req, res)=>{
    const allProducts = JSON.parse(fs.readFileSync('./productData.json'));
    const specificProduct = allProducts.find((product)=>{
        return product.product == req.params.name;
    })
    if(!specificProduct){
        res.send('No Product found, that to be updated!');
    }

    const updatedProducts = allProducts.map((product)=>{
        if(product.product == req.params.name){
            product.price = req.body.price;
        }
        return product;
    })
    fs.writeFileSync('productData.json', JSON.stringify(updatedProducts,null,1));
    res.send('updated successfully!');
});

// DELETE REQUEST for deleting particular Product by Name
app.delete('/product/:name', (req, res)=>{
    const allProducts = JSON.parse(fs.readFileSync('./productData.json'));
    const specificProduct = allProducts.find((product)=>{
        return product.product == req.params.name;
    })
    if(!specificProduct){
        res.send('No Product found, that to be deleted!');
    }

    const updatedProducts = allProducts.filter((product)=>{
        return product.product != req.params.name;
    })
    fs.writeFileSync('productData.json', JSON.stringify(updatedProducts,null,1));
    res.send('deleted successfully!');
});


// Running server on PORT
app.listen(PORT, ()=>{
    console.log(`server running on port: http://localhost:${PORT}`);
});