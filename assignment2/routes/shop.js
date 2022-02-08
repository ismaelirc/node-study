const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('another middleware');
    res.send('<h1>Index</h1>');
});


module.exports = router;

