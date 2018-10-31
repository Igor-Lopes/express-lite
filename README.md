# express-lite

[![Build Status](https://travis-ci.org/Igor-Lopes/express-lite.svg?branch=master)](https://travis-ci.org/Igor-Lopes/express-lite)

Lightweight MVC starter project for Express.js.

## Features

> express-lite comes with essential depedencies only, for quick setup and easier app customization.

* Use ES6/ES7 Features supported by Node.js, such as ES6 **let/const** and ES7 **async/await**
* Autoload modules with [Consign](https://github.com/jarradseers/consign)
* Require app modules as the were installed into `node_modules` with [app-module-path-node](https://github.com/patrick-steele-idem/app-module-path-node)
* **Environment** variables
* [Body Parser](https://github.com/expressjs/body-parser) middleware
* [Helmet](https://github.com/helmetjs/helmet) protection middleware
* [Csurf](https://github.com/expressjs/csurf) protection middleware 
* Ensure SSL with [sslify](https://github.com/florianheinemann/express-sslify)
* [Compression](https://github.com/expressjs/compression) middleware
* [Morgan](https://github.com/expressjs/morgan) request logger
* Render views with [Pug](https://github.com/pugjs/pug)
* Tests setup with [mocha](https://github.com/mochajs/mocha) and [chai](https://github.com/chaijs/chai)

## Prerequisites

* [Node.js](https://nodejs.org/en/) - 8 or higher

## Setup

1. Clone repo

    ```
    $ git clone https://github.com/Igor-Lopes/express-lite.git
    ``` 

2. Go to repo

    ```
    $ cd express-lite
    ```

3. Install dependencies

    ```
    $ npm install
    ```

4. Run app

    ```
    $ node app.js
    ```

    App will be listening on port **5000**:

    ```
    Express Server - Listening on port: 5000 - Environment: development
    ```

## Project Structure

**Overview**

```
.
+-- app
|   +-- models
|   +-- controllers
|   +-- libs
|   +-- routes
|   +-- views
+-- config
|   +-- env
|   +-- config.js
|   +-- express.js
+-- specs
+-- app.js
```

### `app/`

Contains all directories for your app structure, such as **models**, **views**, **controllers** and **libs**.

#### `models/`

**Note** that this directory doesn't exist, but it's the dir you would create to place all models.

#### `controllers/`

Contains all controllers.

#### `libs/`

Contains all libs and helpers.

#### `routes/`

Contains all Express.js routes.

#### `views/`

Contains all Pug Views.

### `config/`

#### `env/`

Contains all environment config files, named as the environment.

#### `config.js`

Configuration file that loads file containing environment variables.

#### `express.js`

Bootstrap configuration file, contaning all express modules configuration.

### `specs/`

Contains all test files.

## License

[The MIT License](https://github.com/Igor-Lopes/express-lite/blob/master/LICENSE)









