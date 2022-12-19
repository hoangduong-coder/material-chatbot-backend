import app from "./src/utils/app";
import http from "http";
import logger from "./src/utils/logger";

const server = http.createServer(app);

const port = process.env.LOCAL_SERVER_PORT;

server.listen(port, () => {
  logger.info(`Hello, this is port ${port}`);
});
