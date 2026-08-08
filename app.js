const express = require('express')
const path = require('path')
const app = express()

// static and middleware 
app.use(express.static('./public'))


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./Ready website example/index.html'))
})


app.use((req, res) => {
    res.status(404).send('No Reponse Found')
})


app.listen(5000, () => {
    console.log('Sever is listening on port 5000...');
})