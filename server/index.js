const express = require('express');
const app = express();

require('dotenv/config');
const port = process.env.EXPRESS_PORT || 5000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
