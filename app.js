const http = require('http')

const server = http.createServer((req,res) => {
    
    if (req.url === '/') {
        console.log('requested something');
        res.end(`<h1>This is the home page</h1>`)
    }
    
})

server.listen(6700, () => {
    console.log("Server listening on : 5000...");
    
})