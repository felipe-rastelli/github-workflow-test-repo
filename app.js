import express from 'express'
import { test } from './test';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  test()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
