
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

morgan.token('data', function getData (req) {
    return JSON.stringify(req.body)
})

app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>')
})


app.get('/info', (req, res) => {
    const d = new Date()
    res.send(`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${d}}</p>
    `)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
})

app.post('/api/persons/', (req, res) => {
    const body = req.body
    if (!body.name) {
        return res.status(400).json({
            error: 'name missing'
        })
    } else if (!body.number) {
        return res.status(400).json({
            error: 'number missing'
        })
    } else {
        const found = persons.find(person => 
            person.name === body.name)
        if (found) {
            return res.status(400).json({
                error: 'name must be unique'
            })
        } else {
            const id = Math.random() * 10000000000000000
            const name = req.body.name
            const number = req.body.number
            persons.concat(
                {
                    "name": name,
                    "number": number,
                    "id": id
                }
            )
            res.status(200).end()
        }
    }
})

const port = 3001
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})