import React, { useEffect, useRef, useState } from "react";
import { Icon } from "leaflet";
import { useSelector, useDispatch } from "react-redux";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Marker,
  Popup,
} from "react-leaflet";
import { setStartLocation, setEndLocation } from "../store/route.slice";
import "leaflet/dist/leaflet.css";
import { MapComponent } from "./MapComponent";
import { LeafletRouting } from "./LeafletRuting";
import { Markers } from "./Markers";

import { LuMapPin } from "react-icons/lu";

import "leaflet-routing-machine";

export const RoutePlanner = () => {
  //Geolocalizacion:
  const dispatch = useDispatch();
  const { startLocation, endLocation } = useSelector((state) => state.route);
  const [childWaypoints, setChildWaypoints] = useState([]);
  const [routeInfo, setRouteInfo] = useState({
    distance: 0,
    intermediatePoints: [],
    instructions: [],
  });
  console.log(routeInfo);

  const handleReceiveWaypoints = (receivedWaypoints) => {
    setChildWaypoints(receivedWaypoints);
  };

  const handleRouteFound = ({ distance, intermediatePoints, instructions }) => {
    setRouteInfo({ distance, intermediatePoints, instructions }); // Almacenamos las instrucciones también
  };

  //useEffect para ubicar al usuario en la geolocalizcion actual
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(setStartLocation([latitude, longitude]));
        },

        (error) => {
          console.error("Error obteniendo la ubicación:", error);
        },
        {
          enableHighAccuracy: true, // activa la ubicacion de gps mas precisa
        }
      );
    } else {
      console.error("Geolocalización no disponible");
    }
  }, [dispatch]);

  return (
    <>
      <MapContainer center={startLocation} zoom={13}>
        <LeafletRouting
          onReceiveWaypoints={handleReceiveWaypoints}
          onRouteFound={handleRouteFound}
        />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapComponent center={startLocation} />
        <Markers />
        <div className="absolute bottom-[0px] left-[0px]">
          <span className="text-greenT text-xl rounded-full flex justify-center items-center w-[32px] h-[32px] bg-white font-semibold z-[100000]">
            <LuMapPin/>
          </span>
        </div>
      </MapContainer>
      {/* Renderiza los waypoints */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div className="lg:py-6 lg:pr-16">
            {/* Waypoints */}
            {childWaypoints.map((wp, index) => (
              <div key={index} className="flex items-center space-x-4 mb-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full bg-softWood text-white">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-lg font-bold">{wp.name}</p>
                  <p className="text-gray-700">{wp.description}</p>
                </div>
              </div>
            ))}
            

            {/* Información de Ruta */}
            <h2 className="text-xl font-semibold mb-4">Información de Ruta</h2>
            <p className="mb-2">
              <strong>Distancia Total:</strong> {routeInfo.distance} metros
            </p>
            <p className="mb-2">
              <strong>Puntos Intermedios:</strong>
            </p>
            <ul className="list-none pl-5">
              {routeInfo.instructions.map((instruction, index) => (
                <li key={index} className="flex items-center space-x-2 mb-2">
                  <span className="flex items-center justify-center w-10 h-10 border rounded-full bg-softWood text-white">
                    {index + 1}.
                  </span>
                  <div>
                    <strong>{instruction.type}</strong>
                    <br />
                    {instruction.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
