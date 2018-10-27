process.env.NODE_ENV = process.env.NODE_ENV || "development";
require("app-module-path").addPath(__dirname);
const http = require("http");
const config = require("./config/config");
const app = require("./config/express")();
const server = http.createServer(app);

server.listen(process.env.PORT || 5000, () => {
  console.log(
    "Express Server - Listening on port: " +
      app.get("port") +
      " - Environment: " +
      process.env.NODE_ENV
  );
});

server.on("close", () => {
  console.log("Express Server - Connection Closed");
});

const stopServer = () => {
  server.close();
};

/* For testing with Mocha */
module.exports.server = app;
module.exports.stopServer = stopServer;
