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
    const html = `<h1>${process.env.DATABASE_URL}</h1>
     <button>${results.rows[0].name}</button>
    `
    res.send(html)
  
  });
}

