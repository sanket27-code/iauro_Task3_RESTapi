const express = require('express');
const router = require('../routes/customer_route');

const app = express();
const PORT = process.env.PORT || 4004;

app.use('/customer', router);

app.listen(PORT, ()=>{
    console.log(`server running on port: http://localhost:${PORT}`);
});