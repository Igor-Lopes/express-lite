/* Env Config */
const config = require("./config");
/* Express */
const express = require("express");
/* Morgan */
const morgan = require("morgan");
/* Consign */
const consign = require("consign");

module.exports = () => {
  /* Init Express app and set port */
  const app = express();
  app.set("port", process.env.PORT || 5000);

  /* Express Morgan */
  app.use(morgan("dev"));

  /* Set view engine */
  app.use(express.static("./public"));
  app.set("view engine", "pug");
  app.set("views", "./app/views");

  /* Set App Locals */
  app.locals.config = config;

  /* Autoload modules with Consign */
  consign({
    cwd: "app"
  })
    .then("libs")
    .then("controllers")
    .then("routes")
    .then("middlewares")
    .into(app);

  return app;
};
