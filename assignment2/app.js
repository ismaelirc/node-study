const express = require('express');

const app = express();

const adminRoute = require('./routes/admin');
const shotRoute = require('./routes/shop');

app.use(adminRoute);
app.use(shotRoute);

app.use( (req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
});


app.listen(3000);