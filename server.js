import express from 'express'

const app = express()
const port = 3333


const showPort = () => {
  console.log('Server running on port: ', port);
}


app.listen(port, showPort)