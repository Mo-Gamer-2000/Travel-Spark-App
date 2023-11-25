import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles.js";

const Map = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();
  const coordinates = { lat: 0, lng: 0 };

  return (
    <div
      className={`mx-3 my-4 px-1 py-1 outline bg-black hover:bg-blue-300 sm:h-300 md:h-500 lg:h-700 ${classes.mapContainer}`}
    >
      <div className="h-full">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={""}
          onChildClick={""}
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
