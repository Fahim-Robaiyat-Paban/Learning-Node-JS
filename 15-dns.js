const dns = require("dns");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end(`<h1>This is the home page</h1>
        <a href="/about">About</a><br>
        <a href="/lookup">Lookup</a><br>
        <a href="/resolve">Resolve4</a>`);
  }

  if (req.url === "/about") {
    return res.end(`<p>This is the about page</p><a href="/">Back Home</a>`);
  }

  if (req.url === "/lookup") {
    return dns.lookup("google.com", (err, address) => {
      res.end(`<h2>IP: ${address}</h2><a href="/">Home</a>`);
    });
  }

  if (req.url === "/resolve") {
    return dns.resolve4("google.com", (err, addresses) => {
      res.end(`<h2>${addresses.join("<br>")}</h2><a href="/">Home</a>`);
    });
  }

  res.end(`
        <h1>Oops</h1>
        <p>This is an unexisting path!</p>
        <a href="/">Back Home</a>
    `);
});

server.listen(6700);
