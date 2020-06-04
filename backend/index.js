const http = require('http');

const app = require('./app');
const logger = require('./utils/logger');
const config = require('./utils/config');

const server = http.createServer(app);

server.listen(config.PORT = 3003, () => {
  logger.info(`Server running on port ${config.PORT}`);
});