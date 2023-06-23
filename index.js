const express = require('express');
const app =  express();

const port = 3100;

// routes
const welcome = require('./routes/welcome')

app.use("", welcome);

app.listen(port, ()=> console.log(`Server on http://localhost:${port}`))