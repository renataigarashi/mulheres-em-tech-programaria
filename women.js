import express from 'express'

const router = express.Router()

const app = express()
const port = 3333

const women = [
{
    nome: "Iana Chan ",
    imagem: "https://bit.ly/3JCXBqP",
    minibio: "CEO & Programaria Founder"
}, 
{
  nome: "Nina da Hora",
  imagem: "https://bit.ly/3FKpFaz",
  minibio: "HAcker antirracista"
}, 
]

const showWomen = (request, response) => {
  response.json(women)
}



const showPort = () => {
  console.log('Server running on port: ', port);
}


app.use(router.get('/women', showWomen))
app.listen(port, showPort)