import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api/travelAdvisorAPI";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import "./App.css";
import Footer from "./components/Footer/Footer";
import PlaceSearches from "./components/Places/PlaceSearches";

const App = () => {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    getPlacesData().then((data) => {
      console.log("DATA:", data);
      setPlaces(data);
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <PlaceSearches />
        </Grid>
      </Grid>
      <Footer />
      <div className="App">
        <h1>Place Searches</h1>
      </div>
    </>
  );
};

export default App;
