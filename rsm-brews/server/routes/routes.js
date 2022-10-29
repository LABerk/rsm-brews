const allBreweriesRoute = require("./breweryRoutes");

const appRouter = (app, fs) => {
  allBreweriesRoute(app, fs);
};

module.exports = appRouter;
