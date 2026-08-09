const express = require('express')
const app = express()
const port = 5000



app.get('/', (req, res) => {
    console.log('user hit the home page')
    res.status(200).send('Home Page')
})


app.get('/about', (req,res) => {
    console.log('user hit the about page')
    res.status(200).send('About Page')
})


app.all((req,res) =>{
    res.status(404).send('<h1> resource not found </h1>')
})



app.listen(5000, (port) => {
    console.log(`${port}`);
})




// app.get
// app.post
// app.put
// app.patch
// app.all
// app.delete
// app.use
// app.listen