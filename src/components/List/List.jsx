import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from "./styles";

const List = ({ places }) => {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  if (!places) {
    return <CircularProgress />;
  }

  const filteredPlaces = places.filter((place) => {
    const nameMatch = place.name.toLowerCase().includes(type.toLowerCase());
    const ratingMatch =
      rating === 0 || (place.rating && place.rating >= rating);

    return nameMatch && ratingMatch;
  });

  return (
    <div className={classes.container}>
      <Typography variant="h4">Visit the Next Spark🔥</Typography>
      <p className="flex text-center justify-start underline">
        In your local area.
      </p>
      <FormControl className={classes.formControl}>
        <InputLabel id="type-label">Type</InputLabel>
        <Select
          labelId="type-label"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="takeaways">Takeaways</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="rating-label">Rating</InputLabel>
        <Select
          labelId="rating-label"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {filteredPlaces.map((place) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={place.id}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
