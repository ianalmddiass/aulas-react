import express from 'express'
import cors from 'cors'
import content from './content.js'

const server = express()

server.use(cors())
server.use(express.json())

server.get('/', (request, response) => {
    response.status(200).json( {'mensagem' : 'Olá mundo'} )
})

server.get('/api', (request, response) => {
    response.status(200).json( {
        'title' : 'the golden bowl', 
        'author': 'evelynn parisian',
        'genre' : 'textbook'
    } )
})

server.get('/api/:amount', (request, response) => {
    let amount = parseInt(request.params.amount)

    response.status(200).json( content.books.slice(amount - 1) )
})

server.listen(4000, () => {
    console.log("server.")
})