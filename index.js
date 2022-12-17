//# all required 
const express = require('express')
const app = express()
var cors = require('cors')
//#port setup
const port = process.env.PORT || 5000
//# used cors
app.use(cors())
//# json req body parser 
app.use(express.json())
import fetch from 'node-fetch';



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})