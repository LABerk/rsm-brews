import React from "react";
import { Link } from "react-router-dom";
import { Address } from "./Address";

export const Brewery = (props) => {
  const externalLinkHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="breweryCards">
      <Link className="noDecoration" to={`/brewerydetails/${props.name}`}>
        <h2 className="breweryName">{props.name}</h2>
        <h3>{props.type} BREWERY</h3>
        <Address
          street={props.street}
          city={props.city}
          state={props.state}
          zip={props.zip}
        />

        <a
          onClick={externalLinkHandler}
          href={props.website}
          target="_blank"
          rel="noreferrer"
        >
          {props.website}
        </a>
      </Link>
    </div>
  );
};
