const express = require('express');
const app =  express();

const port = 3100;

// routes
const welcome = require('./routes/welcome')

app.use("", welcome);
app.use('/data', (req, res)=> {
  let data = Math.floor(Math.random()*10)
  res.send(String(data));
)

app.listen(port, ()=> console.log(`Server on http://localhost:${port}`))
