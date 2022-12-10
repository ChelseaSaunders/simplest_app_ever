const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (_req, res) => {
  res.send('<h1><Oh hi, World!</h1>');
});

app.listen(port, () => {
  console.log(`Server listening on port ${PORT}`);
});