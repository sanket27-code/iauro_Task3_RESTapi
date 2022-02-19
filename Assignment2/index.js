const express = require('express');
const routes = require('./src/routes/product_routes')

const app = express();
const PORT = process.env.PORT || 4006;

app.use(express.json());
app.use('/product', routes);

// Running server on PORT
app.listen(PORT, ()=>{
    console.log(`server running on port: http://localhost:${PORT}`);
});