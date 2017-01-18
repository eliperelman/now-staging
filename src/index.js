import { createServer } from 'http';

const port = process.env.PORT || 3000;

createServer((request, response) => {
  response.writeHead(200);
  response.end();
})
.listen(port, () => console.log(`Server listening on port ${port}`));
