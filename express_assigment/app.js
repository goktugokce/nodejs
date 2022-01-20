const express = require('express');

const app = express();

/*app.use((req,res,next) => {
    console.log("In the frst middleware");
    next();
});

app.use((req,res,next) => {
    res.send('<h1>Hello From your Response</h1>');
});*/

app.use('/users',(req,res,next) => {
    res.send('<h1>Hello From your Users Path</h1>');
});

app.use('/',(req,res,next) => {
    res.send('<h1>Hello From your / path</h1>');
});


app.listen(3000);