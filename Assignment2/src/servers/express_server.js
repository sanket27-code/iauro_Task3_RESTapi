const express = require('express');
const routes = require('../routes/product_routes');

const app = express();
const PORT = process.env.PORT || 4008;

app.use(express.json());
app.use('/product', routes);

// Running server on PORT
app.listen(PORT, ()=>{
    console.log(`server running on port: http://localhost:${PORT}`);
});