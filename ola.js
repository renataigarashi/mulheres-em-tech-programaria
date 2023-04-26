import express from 'express'

const router = express.Router()

const app = express()
const port = 3333


function showHello(request, response) {
  response.send('Hello World!')
}
const showPort = () => {
  console.log('Server running on port: ', port);
}




app.use(router.get('/ola', showHello))
app.listen(port, showPort)