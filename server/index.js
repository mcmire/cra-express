const express = require("express");
const app = express();

app.get('/foo.json', (req, res) => {
  res.header('Accept', 'application/json')
  res.send('{"hey":"there"}');
})

app.listen(process.env.PORT || 3001);
