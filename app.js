const express = require('express')
const { test } = require('./test')
const { test3 } = require('./test3')

const app = express()
const port = 3000


app.get('/', (req, res) => {
  const a = null;
  test()
  test3()

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
