const fs = require('fs');

exports.allProducts = JSON.parse(fs.readFileSync('./src/models/productData.json'));