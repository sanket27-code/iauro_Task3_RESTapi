const express = require('express');
const routes = express.Router();
const product_controller = require('../contoller/product_controller');

// GET REQUEST for getting all Products
routes.get('/', product_controller.getAllProducts);

// POST REQUEST for inserting Product
routes.post('/', product_controller.addProduct);

// GET REQUEST for getting particular Product by Name
routes.get('/:name', product_controller.getOneProduct);

// PATCH REQUEST for updating particular Product by Name
routes.patch('/:name', product_controller.updateProduct);

// DELETE REQUEST for deleting particular Product by Name
routes.delete('/:name', product_controller.deleteProduct);

module.exports = routes;