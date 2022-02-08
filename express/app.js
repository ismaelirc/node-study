const http = require('http');
const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log('another middleware');
    res.send('<h1>Add products</h1>');
});


app.use('/product', (req, res, next) => {
    console.log('another middleware');
    res.send('<h1>Products</h1>');
})

app.listen(3000);