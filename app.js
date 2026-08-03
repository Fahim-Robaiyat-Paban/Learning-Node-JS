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
