/* Env Config */
const config = require("./config");
/* Express */
const express = require("express");
/* Helmet */
const helmet = require("helmet");
/* Cookie Parser */
const cookieParser = require("cookie-parser");
/* Csurf */
const csurf = require("csurf");
/* Morgan */
const morgan = require("morgan");
/* Body Parser */
const bodyParser = require("body-parser");
/* Body Parser Error */
const bodyParserError = require("bodyparser-json-error");
/* Consign */
const consign = require("consign");

module.exports = () => {
  /* Init Express app and set port */
  const app = express();
  app.set("port", process.env.PORT || 5000);

  /* Helmet */
  app.use(helmet());

  /* Cookie Parser */
  app.use(cookieParser());

  /* Express Csurf */
  app.use(csurf({ cookie: true }));

  /* Handle Csurf error */
  app.use((err, req, res, next) => {
    if (err.code !== "EBADCSRFTOKEN") return next(err);
    res.status(403).end();
  });

  /* Express Morgan */
  app.use(morgan("dev"));

  /* Body Parser */
  app.use(bodyParser.json());

  /* Body Parser Error */
  app.use(
    bodyParserError.beautify({
      status: 400,
      res: {
        error: "JSON Bad Syntax"
      }
    })
  );

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
    .into(app);

  return app;
};
