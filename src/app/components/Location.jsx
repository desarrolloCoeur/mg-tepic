"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "/location.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const Location = () => {
  function handleClick() {
    if (typeof window !== "undefined") {
      window.open(
        "https://www.google.com/maps/dir/?api=1&destination=20.714192254298%2C-105.27574896812",
        "_blank"
      );
    }
  }

  const position = [21.512464362872763, -104.90595956199002];

  return (
    <div className="relative h-[300px]">
      <div className="absolute inset-0 z-[0]">
        <div className="flex justify-center w-[100%] h-[300px]">
          <MapContainer
            center={position}
            zoom={17}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              position={position}
              icon={customIcon}
              eventHandlers={{
                click: handleClick,
              }}
            >
              <Popup>MG Tepic</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>      
    </div>
  );
};

export default Location;
