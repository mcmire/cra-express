const express = require("express");
const app = express();

app.get('/foo.json', (req, res) => {
  res.header('Accept', 'application/json')
  res.send('{"hey":"there"}');
})

app.listen(process.env.PORT || 3001, () => {
  console.log("Server started on: https://localhost:3001");
  console.log("Visit this URL for the client: https://localhost:3000");
});
