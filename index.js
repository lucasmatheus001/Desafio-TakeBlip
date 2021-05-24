const bodyParser =  require('body-parser')
const express = require('express')
const cors  = require('cors')
const port = process.env.PORT || 4000
const app = express()
app.use(cors());
app.use(express.json())

app.use('/api', require('./src/controllers/TakeDesafios').router)
app.listen(port, () => {
    console.log('Escutando na porta: ' + port)
})