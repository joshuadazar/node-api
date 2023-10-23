const pg = require('pg');

const pool = new pg.Pool({
  connectionString: 'postgres://projects_0t43_user:BZjHLJ0b3OLsSDQ3bluUl0MBJUGvlO2k@dpg-ckngbtj6vnjc73anm3e0-a.oregon-postgres.render.com/projects_0t43',
  ssl: true
});

module.exports = pool;
