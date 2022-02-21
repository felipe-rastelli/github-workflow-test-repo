const express = require('express');
const { test } = require('./test');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  test()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})