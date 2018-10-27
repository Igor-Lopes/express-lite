module.exports = app => {
  const controller = {};
  const helloLib = app.libs.hello;

  controller.render = (req, res) => {
    res.render("index", {
      title: helloLib.getTitle(),
      message: helloLib.getMessage()
    });
  };

  return controller;
};
