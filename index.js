const express = require('express')

const app = express()
app.disable('x-powered-by')

// Middlewares
app.use(express.json())

app.get('/say-hello', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get('/say-hello-json', (req, res) => {
  res.send({ text: 'Hellow World' })
})

app.post('/person', (req, res) => {
  res.send(
    `The new person is "${req.body.name}", ${
      req.body.sex === 'M' ? 'He' : 'She'
    } is ${req.body.old} years old.`
  )
})

app.use((req, res) => {
  res.status(404).send('<h1>Not found!</h1>')
})

app.listen(53100, () => {
  console.log('server listening on port http://localhost:53100')
})
