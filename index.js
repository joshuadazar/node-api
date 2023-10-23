const express = require('express');
require('dotenv').config();
const pool = require('./database/connection');

const app =  express();

const port = 3100;

// routes
const welcome = require('./routes/welcome')
const rnd = require('./routes/rnd')
const query = require('./database/query')

//app.get("/rnd", rnd);
app.get("/data", welcome);
app.get("/query/:id", query)

app.use('/rnd', async (req, res) => {
  try {
  const result = await pool.query('SELECT NOW()')
  res.send(result.rows[0])
  } catch(err) {
    res.send(err)
  }
});

app.listen(port, () => console.log(`Server on http://localhost:${port}`));
