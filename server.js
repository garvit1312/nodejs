const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response header with a 200 status and content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Log your name to the console
  console.log('Garvit Gupta');

  // Send your name as the response to the client
  res.end('Garvit Gupta\n');
});

// Listen on port 4000
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
