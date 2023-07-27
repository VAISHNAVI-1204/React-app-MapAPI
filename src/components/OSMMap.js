import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

const OSMMap = ({ selectedRegion }) => {
  // Sample default position and zoom
  const defaultPosition = [0, 0];
  const defaultZoom = 2;

  // Sample GeoJSON data for the boundaries of the selected regions
  const getGeoJSONData = () => {
    switch (selectedRegion) {
      case 'United States':
        return {
          type: 'FeatureCollection',
          features: [
            // Coordinates for the boundary of the United States (Example data)
            {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-125, 50],
                    [-125, 24],
                    [-67, 24],
                    [-67, 50],
                    [-125, 50]
                  ]
                ]
              }
            }
          ]
        };
      case 'India':
        return {
          type: 'FeatureCollection',
          features: [
            // Coordinates for the boundary of India (Example data)
            {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [68, 7],
                    [68, 37],
                    [97, 37],
                    [97, 7],
                    [68, 7]
                  ]
                ]
              }
            }
          ]
        };
      case 'United Kingdom':
        return {
          type: 'FeatureCollection',
          features: [
            // Coordinates for the boundary of the United Kingdom (Example data)
            {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [
                  [
                    [-8, 50],
                    [-8, 60],
                    [2, 60],
                    [2, 50],
                    [-8, 50]
                  ]
                ]
              }
            }
          ]
        };
      default:
        return null;
    }
  };

  return (
    <MapContainer center={defaultPosition} zoom={defaultZoom} style={{ height: '100%', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {selectedRegion && (
        <GeoJSON
          data={getGeoJSONData()}
          style={{
            fillColor: '#3388ff',
            fillOpacity: 0.6,
            color: '#1f1f1f',
            weight: 2
          }}
        />
      )}
    </MapContainer>
  );
};

export default OSMMap;
