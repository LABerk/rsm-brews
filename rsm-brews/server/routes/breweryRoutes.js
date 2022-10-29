const mockData = "./data/breweries.json";
const allBreweriesRoute = (app, fs) => {
  app.get("/breweries", (req, res) => {
    fs.readFile(mockData, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get("/breweries/:queryName", (req, res) => {
    fs.readFile(mockData, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      const breweries = JSON.parse(data);
      const singleBrewery = breweries.find(
        (brewery) => brewery.name === req.params.queryName
      );

      res.send(singleBrewery);
    });
  });
};

module.exports = allBreweriesRoute;
