const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('This is Kristoffer Edström portfolio server');
});

// Listen on a specific port (e.g., 3000)
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});