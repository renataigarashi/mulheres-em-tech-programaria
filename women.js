import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

const app = express()
const port = 3333

const listWomen = [
{
    id: '1',
    name: "Iana Chan ",
    image: "https://bit.ly/3JCXBqP",
    minibio: "CEO & Programaria Founder"
}, 
{
  id: '2',
  name: "Nina da Hora",
  image: "https://bit.ly/3FKpFaz",
  minibio: "HAcker antirracista"
}, 
{
  id: '3',
  name: "Teste",
  image: "https://bit.ly/3FKpFaz",
  minibio: "HAcker"
}, 
]

const showWomen = (request, response) => {
  response.json(listWomen)
}

const addWoman = (request, response) => {
  const newWoman = {
    id: uuidv4(),
    name: request.body.name,
    image: request.body.image,
    minibio: request.body.minibio
  }
  listWomen.push(newWoman)

  response.json(listWomen)
}

const updateWoman = (request, response) => {
  const searchWoman = (woman) => {
    if (woman.id === request.params.id) {
      return woman
    }
  }

  const womanFinded = listWomen.find(searchWoman)

  if (request.body.name) {
    womanFinded.name = request.body.name
  }

  if (request.body.image) {
    womanFinded.image = request.body.image
  }

  if (request.body.minibio) {
    womanFinded.minibio = request.body.minibio
  }

  response.json(listWomen)

}

const deleteWoman = (request, response) => {
  const allWomanLessFromSearch = (woman) => {
    if (woman.id !== request.params.id) {
      console.log('WOMAN', woman)
      return woman
    }
  }

    const womenNotDeleted = listWomen.filter(allWomanLessFromSearch)
    response.json(womenNotDeleted)
  }

app.use(express.json())

app.use(router.get('/women', showWomen))
app.use(router.post('/addWoman', addWoman))
app.use(router.patch('/updateWoman/:id', updateWoman))
app.use(router.delete('/deleteWoman/:id', deleteWoman))


const showPort = () => {
  console.log('Server running on port: ', port);
}
app.listen(port, showPort)