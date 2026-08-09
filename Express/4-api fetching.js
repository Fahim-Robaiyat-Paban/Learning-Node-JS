const express = require('express')
const app = express()
const {productapi} = require('./data')


app.get('/', (req,res) => {
    res.send(`<h1>Home page</h1> <a href='./data.js'>Products</a>`)
})
// Only show ID NAME CATEGORY and not other info
app.get('/data.js', (req, res) => {
    const newProducts = productapi.products.map((products) => {
        const {id,name,category} = products
        return {id,name,category}
    })
    res.json(newProducts)
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})