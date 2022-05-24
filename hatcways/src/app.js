const express = require("express");
const router = require("../routes/routes");
const apicache = require("apicache");

const app = express();
const cache = apicache.middleware

app.use(cache('5 minutes'))
app.use(express.json());
app.use('/api', router);


module.exports=app;