const pool = require('./connection');



module.exports = (req, res) => {
  const query = `
  SELECT *
  FROM projects
  WHERE name LIKE '%${req.params.id}%';
  `;

  pool.query(query, (err, results) => {
    if (err) {
      console.warn(err);
      return;
    }

    console.log(req.params.id)
    res.send(String(results.rows[0].name))
  
  });
}

