import React, { useEffect } from 'react';
import {  useMapEvents , useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';

export const LeafletRouting = () => {
  const map = useMap();

  useEffect(() => {
    const routingControl = new L.Routing.Control({
      waypoints: [
        L.latLng(-34.6047, -58.3995),
        L.latLng(-34.6036, -58.3985), // Cambia estos valores según sea necesario
      ],
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim(),
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, []);

  const handleMapClick = (e) => {
    const waypoint = L.latLng(e.latlng.lat, e.latlng.lng);
    map.addWaypoint(waypoint);
  };

  useMapEvents({
    click: handleMapClick,
  });

  return null;
};

