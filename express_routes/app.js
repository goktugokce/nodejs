const express = require('express');
const bodyParder = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParder.urlencoded({extended : false}));
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
    
})

app.listen(3000);