const http = require('http')

const server = http.createServer((req,res) => {
    console.log('requested something');
    
    if (req.url === '/') {
        res.end(`<h1>This is the home page</h1>`)
    }
    
})

server.listen(6700, () => {
    console.log("Server listening on : 5000...");
    
})