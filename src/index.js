import express from 'express'

import userRoute from './routes/user.js'


const app = express()
const port = 3000

app.use('/user', userRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})