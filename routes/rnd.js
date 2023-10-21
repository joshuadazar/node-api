module.exports = (req, res) => {
  let data = Math.floor(Math.random()*10)
  res.send(String(data));
}