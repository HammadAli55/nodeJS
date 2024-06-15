import http from 'http';

// The http.createServer() method turns your computer into an HTTP server and creates an HTTP Server object. It takes requestListner as an argument

//(req, res) -> requestListner execute on every incoming request - if request come this function will be executed

// use anonymous function -> const server = http.createServer(function(req, res) {}
// OR use arrow Function
const server = http.createServer((req, res) => {
  console.log('url:', req.url)
  console.log('method:',  req.method)
  console.log('headers:', req.headers)
  // process.exit();

  // attach header to our response where we pass meta information saying that the type content which will be the part of response is html, there're some supported headers that browser accepts
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Shah</title></head>')
  res.write('<body><h1>Shah</h1></body>')
  res.write('</html>')
  res.end();
})

// listen - starts a process where Node JS will not immediately exit our script, but Node JS keep it running to listen.
server.listen(3001)