import React, { useEffect } from "react";
import "./placeSearches.css"; // Import the styles

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const PlaceSearches = () => {
  useEffect(() => {
    let map;
    let service;
    let infowindow;

    // Declare initMap in the global scope
    window.initMap = () => {
      // Check if Geolocation is supported by the browser
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = new window.google.maps.LatLng(
              position.coords.latitude,
              position.coords.longitude
            );

            infowindow = new window.google.maps.InfoWindow();
            map = new window.google.maps.Map(document.getElementById("map"), {
              center: userLocation,
              zoom: 15,
            });

            // Add a marker for the user's location
            const userMarker = new window.google.maps.Marker({
              position: userLocation,
              map,
              icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: "red",
                fillOpacity: 1,
                strokeColor: "black",
                strokeWeight: 2,
                anchor: new window.google.maps.Point(0, 0),
              },
            });

            const request = {
              query: "Art Gallery", // You can adjust the search query here
              fields: ["name", "geometry"],
            };

            service = new window.google.maps.places.PlacesService(map);
            service.findPlaceFromQuery(request, (results, status) => {
              if (
                status === window.google.maps.places.PlacesServiceStatus.OK &&
                results
              ) {
                for (let i = 0; i < results.length; i++) {
                  createMarker(results[i]);
                }
              }
            });
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by your browser");
      }
    };

    const createMarker = (place) => {
      if (!place.geometry || !place.geometry.location) return;

      const marker = new window.google.maps.Marker({
        map,
        position: place.geometry.location,
      });

      window.google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name || "");
        infowindow.open(map);
      });
    };

    // Check if the Google Maps API is already loaded
    if (!window.google || !window.google.maps) {
      // Load the Google Maps API with Places Library
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=places&v=weekly`;
      script.defer = true;
      document.body.appendChild(script);

      // Clean up function to remove the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    } else {
      // If the API is already loaded, manually call initMap
      window.initMap();
    }
  }, []);

  return (
    <div
      className="flex text-center justify-center px-2 py-3 my-3 md:ml-0 md:w-full lg:w-3/4 xl:w-4/5 2xl:w-3/4 md:mx-auto cursor-pointer outline"
      id="map"
    ></div>
  );
};

export default PlaceSearches;
