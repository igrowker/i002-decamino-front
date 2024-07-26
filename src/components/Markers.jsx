
import React, { useState , useEffect} from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import axios from "axios";
import { Icon } from "leaflet";
export const Markers = () => {
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    const dataMarkers = `https://decamino-back.onrender.com/api/restaurants`;
    axios
      .get(dataMarkers)
      .then((response) => {
        const dataRes = response.data;
        const filteredData = dataRes.filter(marker => marker.location && Array.isArray(marker.location) && marker.location.length === 2);
        setMarkers(filteredData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setMarkers]);

  // create custom icon
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",

    iconSize: [38, 38], // size of the icon
  });
  return (
    <>
       {markers.map((marker  , id) => (
        <Marker  key={id} position={marker.location} icon={customIcon}>
          <Popup position={marker.location}>{marker.title }</Popup>
        </Marker>
      ))}
    </>
  );
};
