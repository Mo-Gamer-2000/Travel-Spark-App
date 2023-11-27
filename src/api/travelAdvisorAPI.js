import axios from "axios";

const rapidApiKey = process.env.REACT_APP_RAPID_API_KEY;

if (!rapidApiKey) {
  console.warn(
    "RapidAPI key is not set. Requests to the Travel Advisor API will be unauthorised."
  );
}

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Key": rapidApiKey || "",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.error(
      "Error fetching places data:",
      error.response?.data || error.message
    );
    throw error;
  }
};
