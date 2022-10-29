const breweryRoutes = require("./breweryRoutes");

const appRouter = (app, fs) => {
  breweryRoutes(app, fs);
};

module.exports = appRouter;
