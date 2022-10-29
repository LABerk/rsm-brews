import React from "react";

export const Address = (props) => {
  return (
    <div className="address">
      <h3>{props.street}</h3>
      <h3>
        {props.city}, {props.state}
      </h3>
      <h3>{props.zip}</h3>
    </div>
  );
};
