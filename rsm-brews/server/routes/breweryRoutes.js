const breweryRoutes = (app, fs) => {
  const mockData = "./data/breweries.json";

  app.get("/breweries", (req, res) => {
    fs.readFile(mockData, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = breweryRoutes;
