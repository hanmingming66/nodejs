const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World! 你好啊，测试测试下');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
