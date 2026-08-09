const express = require('express')
const app = express()
const {productapi} = require('./data')


app.get('/', (req,res) => {
    res.send(`<h1>Home page</h1> <a href='./data.js'>Products</a>`)
})

app.get('/data.js', (req, res) => {
    const newProducts = productapi.products.map((products) => {
        const {id,name,category} = products
        return {id,name,category}
    })
    res.json(newProducts)
})


app.get('/data.js/:productID', (req, res) => {
    const {productID} = req.params
    const singleProduct = productapi.products.find((product) => {
       return product.id === Number(productID);
        
    })
    if (!singleProduct) {
        return res.status(404).send(`Product doesn't exist`)
    } else {
        res.json(singleProduct)
    }
})


// app.get('/data.js/1', (req, res) => {
//     const singleProduct = productapi.products.find((product) => {
//        return product.id === 1
        
//     })
//     res.json(singleProduct)
// })


app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})


