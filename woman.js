import express from 'express'

const router = express.Router()

const app = express()
const port = 3333


const showWoman = (request, response) => {
  response.json({
    nome: "Renata",
    imagem: "https://media.licdn.com/dms/image/C5603AQEUHP79oCeemA/profile-displayphoto-shrink_200_200/0/1516851606896?e=1687996800&v=beta&t=bBBTaks6WbuCOcYce5b4ox3Y8mmWj2NQvAYWyhG_xzw",
    minibio: "Developer"
  })
}



const showPort = () => {
  console.log('Server running on port: ', port);
}


app.use(router.get('/woman', showWoman))
app.listen(port, showPort)