const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('another middleware');
    res.send('<h1>Add products</h1>');
});

router.use('/product', (req, res, next) => {
    console.log('another middleware');
    res.send('<h1>Products</h1>');
});


module.exports = router;