const express = require('express')
const app = express()
const {productapi, propleapi} = require('./data')


app.get('/', (req,res) => {
    res.json(productapi)
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})