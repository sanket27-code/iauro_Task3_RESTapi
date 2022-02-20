const express = require('express');
const customer_controller = require('../contoller/customer_controller');
const router = express.Router();

// GET all customers
router.get('/', customer_controller.getAllCustomers);

// GET specific customer by name
router.get('/:name', customer_controller.getOneCustomer);

module.exports = router;