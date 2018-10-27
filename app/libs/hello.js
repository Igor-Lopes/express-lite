module.exports = app => {
  const lib = {};

  lib.getTitle = () => {
    return "Hey";
  };

  lib.getMessage = () => {
    return "Hello there!";
  };

  return lib;
};
