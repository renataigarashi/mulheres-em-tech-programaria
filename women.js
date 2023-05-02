import express from 'express'
import { dbConnection } from './db.js'
import Woman from './womanModel.js'


dbConnection() // call function to connect database
const router = express.Router()
const app = express()
const port = 3333


const showWomen = async (request, response) => {
  try {
    const listWomenFromDatabase = await Woman.find()

    response.json(listWomenFromDatabase)
  } catch (error) {
    console.log(error)
  }
}

const addWoman = async (request, response) => {
  const newWoman = new Woman({
    name: request.body.name,
    image: request.body.image,
    quotation: request.body.quotation,
    minibio: request.body.minibio
  })

  try {
    const createdWoman = await newWoman.save()
    response.status(201).json(createdWoman)
  } catch (error) {
    console.log('ERRO', error)
  }
}

const updateWoman = async (request, response) => {
  try {
    const findedWoman = await Woman.findById(request.params.id)

    if (request.body.name) {
      findedWoman.name = request.body.name
    }
  
    if (request.body.image) {
      findedWoman.image = request.body.image
    }

    if (request.body.quotation) {
      findedWoman.quotation = request.body.quotation
    }
  
    if (request.body.minibio) {
      findedWoman.minibio = request.body.minibio
    }
    const updatedWomanInDatabase = await findedWoman.save()
    response.json(updatedWomanInDatabase)

  } catch (error) {
    response.json({ errorMessage: error})
    console.log('ERRO: ', error)
  }
}

const deleteWoman = async (request, response) => {
    try {
      await Woman.findByIdAndDelete(request.params.id) 
      response.json({ message: 'Women sucessfully deleted!'})
    } catch (error) {
      console.log('ERRO: ', error)
    }
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