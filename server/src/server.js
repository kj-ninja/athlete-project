const http = require('http');
require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer() {
  try {
    server.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();