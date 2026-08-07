const http = require('http')
const fs = require('fs')
const htmlz = fs.readFileSync('../Ready website example/index.html')
const csss = fs.readFileSync(`../Ready website example/css/style.css`)
const server = http.createServer((req,res) => {
    let url = req.url
    if (url === '/') {
        console.log('html done');       
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(htmlz)
        res.end()
    }
    if (url === '/css/style.css') {
        console.log('css done');       
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(csss)
        res.end()
    }
    else{
        res.end()
    }
    

})
server.listen(5000, () => {
    console.log('server is running on port 5000...');
})