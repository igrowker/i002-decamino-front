import { Chip } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MapContainer,
  TileLayer,
  Marker,
  CircleMarker,
  Popup,
} from "react-leaflet";
import { setStartLocation, setEndLocation } from "../store/routeSlice";
import "leaflet/dist/leaflet.css";

export const RoutePlanner = () => {
  const dispatch = useDispatch();
  const { startLocation, endLocation } = useSelector((state) => state.route);

  // markers
  const markers = [
    {
      geocode: [-37.349213, -59.124641],
      popUp: "Hello, I am pop up 1",
    },
    {
      geocode: [-37.329219, -59.161377],
      popUp: "Hello, I am pop up 2",
    },
    {
      geocode: [-37.30205, -59.11314],
      popUp: "Hello, I am pop up 3",
    },
  ];

  useEffect(() => {
    // Simula la obtención de ubicaciones a partir de algún servicio
    dispatch(setStartLocation([-37.321574, -59.13271]));
    dispatch(setEndLocation([-37.237982, -59.233475]));
  }, [dispatch]);

  return (
    <>
      <MapContainer
        center={startLocation}
        zoom={13}

        // style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
            <Marker 
            key={index} 
            position={marker.geocode}
            onClick={() => dispatch(setStartLocation(marker.geocode))}
            >   </Marker>
            ))}
        <CircleMarker center={startLocation} radius={10} />
        <CircleMarker center={endLocation} radius={10} />
      </MapContainer>
    </>
  );
};
