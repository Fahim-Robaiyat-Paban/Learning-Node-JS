const http = require('http')

const server = http.createServer((req,res) => {
    let url = req.url
    if (url === '/') {
        console.log('someone made a request');       
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(`<h1>Hello World?</h1>`)
        res.end
    }
})
server.listen(5000, () => {
    console.log('server is running on port 5000...');
    
})