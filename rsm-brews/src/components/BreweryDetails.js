import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MapView } from "./MapView";
import { Address } from "./Address";

export const BreweryDetails = () => {
  const params = useParams();

  const [breweryName, setBreweryName] = useState("");
  const [brewerySt, setBrewerySt] = useState("");
  const [breweryCity, setBreweryCity] = useState("");
  const [breweryState, setBreweryState] = useState("");
  const [breweryZip, setBreweryZip] = useState("");
  const [breweryLat, setBreweryLat] = useState("");
  const [breweryLng, setBreweryLng] = useState("");

  useEffect(() => {
    const fetchBrewery = async () => {
      try {
        const queryName = await params.name.replaceAll(" ", "_");
        const response = await fetch(
          `https://api.openbrewerydb.org/breweries?by_name=${queryName}&per_page=1`
        );
        const json = await response.json();
        setBreweryName(json[0].name);
        setBrewerySt(json[0].street);
        setBreweryCity(json[0].city);
        setBreweryState(json[0].state);
        setBreweryZip(json[0].postal_code);
        setBreweryLat(json[0].latitude);
        setBreweryLng(json[0].longitude);
      } catch (err) {
        console.log("There was a problem fetching brewery data", err);
      }
    };

    fetchBrewery();
  }, [params.name, breweryName]);

  const breweryLatNum = Number(breweryLat);
  console.log(breweryLatNum);
  const breweryLngNum = Number(breweryLng);
  console.log(breweryLngNum);

  return (
    <div className="detailsContainer">
      <div className="details">
        <h2 className="breweryName">{breweryName}</h2>
        <Address
          street={brewerySt}
          city={breweryCity}
          state={breweryState}
          zip={breweryZip}
        />
      </div>

      <div className="map">
        <MapView
          center={[breweryLatNum, breweryLngNum]}
          lat={breweryLat}
          lng={breweryLng}
          text={breweryName}
        />
      </div>
      <Link className="back" to="/">
        Back to all Breweries
      </Link>
    </div>
  );
};
