import express from 'express'

const router = express.Router()

router.get('/:id', (req, res) => {
  const id = req.params.id
  const userURL = 'https://dreamhack.io/api/v1/user/profile/' + id

  
  res.send('Hello admin!')
})