const http = require("http");
const hostname = "localhost";
const PORT = 3033;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(PORT, hostname, () => {
  console.log(`Server is running at http://${hostname}:${PORT}/`);
});
