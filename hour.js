import express from 'express'

const app = express()
const port = 3333

const router = express.Router()

const showHour = (request, response) => {
  const date = new Date()
  const hour = date.toLocaleTimeString('pt-BR')

  response.send(hour)
}

const showPort = () => {
  console.log('Server running on port: ', port);
}

app.use(router.get('/hour', showHour))
app.listen(port, showPort)