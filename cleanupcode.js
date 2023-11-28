// const http = require('http');
// const routes = require('./routes');
// const server  = http.createServer(routes);
// // Listen on port 3000
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const http = require('http');
const routes = require('./routes');
console.log(routes.someText);
const server  = http.createServer(routes.handler);
// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
