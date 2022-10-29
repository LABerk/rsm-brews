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
        // FOR OPENBREWERYDB API const queryName = await params.name.replaceAll(" ", "_");
        const response = await fetch(`/breweries/${params.name}`);
        const json = await response.json();
        setBreweryName(json.name);
        setBrewerySt(json.street);
        setBreweryCity(json.city);
        setBreweryState(json.state);
        setBreweryZip(json.postal_code);
        setBreweryLat(json.latitude);
        setBreweryLng(json.longitude);
      } catch (err) {
        console.log("There was a problem fetching brewery data", err);
      }
    };

    fetchBrewery();
  }, [params.name, breweryName]);

  const breweryLatNum = Number(breweryLat);

  const breweryLngNum = Number(breweryLng);

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
        <Link className="back" to="/">
          Back to all Breweries
        </Link>
      </div>

      <div className="map">
        <MapView
          center={[breweryLatNum, breweryLngNum]}
          lat={breweryLat}
          lng={breweryLng}
          text={breweryName}
        />
      </div>
    </div>
  );
};
