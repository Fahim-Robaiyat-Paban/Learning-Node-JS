const http = require('http')
const { type } = require('os')
const server = http.createServer((req,res) =>{
    if (req.url === '/') {
      return res.end(`<h1>This is the home page</h1> <p>and this is the button to the about pageno<p/> <a href="/about">About</a>`)

    }
    if (req.url === '/about') {
       return res.end(`<p>this is the about page</p> <a href="/">back home</a>`)
    }
    res.end(`
        <h1>Oops</h1>
        <p>This is an unexisting path!</p>
        <a href="/">back home</a>
        `
    )
})
server.listen(6700)

const server = http.createServer((req,res) => {
    
    if (req.url === '/') {
        console.log('requested something');
        res.end(`<h1>This is the home page</h1>`)
    }
    
})
server.listen(6700, () => {
    console.log("Server listening on : 5000...");
    
})
const http = require('http')

const serverrr = http.createServer((req,res) => {
    if (req.url === '/') {
        console.log('requested something');
        res.end(`<h1>This is the home page</h1>`)
    }
    
})

serverrr.on('finish', () => {
    console.log('connected');
    
})

serverrr.listen(5000)
