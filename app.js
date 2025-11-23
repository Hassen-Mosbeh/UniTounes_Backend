const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World with Express!');
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});