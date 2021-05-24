const bodyParser =  require('body-parser')
const express = require('express')
const port = process.env.PORT || 4000
const app = express()
app.use(express.json())

app.use('/api', require('./src/controllers/TakeDesafios').router)
app.listen(port, () => {
    console.log('Escutando na porta: ' + port)
})