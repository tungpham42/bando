"use client";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import geojson from "@/constants/provinces.geojson";
import { useRouter } from "next/navigation";

export default function MapView() {
  const router = useRouter();

  const onEachFeature = (feature: any, layer: any) => {
    const name = feature.properties.name;
    layer.on({
      click: () => {
        router.push(`/${feature.properties.slug}`);
      },
    });
    layer.bindTooltip(name);
  };

  return (
    <MapContainer
      center={[16.047079, 108.20623]}
      zoom={6}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={geojson as any} onEachFeature={onEachFeature} />
    </MapContainer>
  );
}
