"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "./fixLeafletIcon";
import Loading from "./Loading";

function getMapsLink(address: string) {
  if (typeof window === "undefined") return "#";

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const encodedAddress = encodeURIComponent(address);

  return isIOS
    ? `https://maps.apple.com/?daddr=${encodedAddress}`
    : `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
}

export default function OSMMap({
  address,
  name,
}: {
  address?: string;
  name?: string;
}) {
  const [coords, setCoords] = useState<LatLngExpression | null>(null);

  useEffect(() => {
    async function fetchCoords() {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          address ?? "County Road 439, Hartsel, CO 80449, USA"
        )}`
      );
      const data = await res.json();
      if (data[0]) {
        setCoords([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
      }
    }
    fetchCoords();
  }, [address]);

  if (!coords) return <Loading />;

  const link = getMapsLink(
    address ?? "County Road 439, Hartsel, CO 80449, USA"
  );

  return (
    <MapContainer
      center={coords}
      zoom={15}
      className="rounded-lg border shadow border-muted z-0"
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coords}>
        <Popup>
          {name && (
            <strong>
              {name}
              <br />
            </strong>
          )}
          {address}
          <br />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Get Directions
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
