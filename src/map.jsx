import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import mapStyles from './data/map-styles';
import banjarData from './data/banjar.json';
import ReactAudioPlayer from 'react-audio-player';

const LIBRARIES = ['geometry', 'drawing', 'places'];
const MAP_CENTER = { lat: -8.403449367266102, lng: 115.1592653203491 };
const MAP_CONTAINER_STYLE = { width: '100%', height: '100vh' };

function Map() {
  const [selectedBanjar, setSelectedBanjar] = useState(null);
  const base = import.meta.env.BASE_URL;

  return (
    <GoogleMap
      options={{ styles: mapStyles.mapStyles }}
      zoom={10}
      center={MAP_CENTER}
      mapContainerStyle={MAP_CONTAINER_STYLE}
    >
      {banjarData.banjar.map((banjar) => (
        <Marker
          key={banjar.properties.NAME}
          position={{
            lat: banjar.properties.coordinates[0],
            lng: banjar.properties.coordinates[1],
          }}
          onClick={() => setSelectedBanjar(banjar)}
        />
      ))}

      {selectedBanjar && (
        <InfoWindow
          position={{
            lat: selectedBanjar.properties.coordinates[0],
            lng: selectedBanjar.properties.coordinates[1],
          }}
          onCloseClick={() => setSelectedBanjar(null)}
        >
          <div>
            <div>
              <h2>{selectedBanjar.properties.NAME}</h2>
              <p>Ensemble ID: {selectedBanjar.properties.ENSEMBLE_ID}</p>
              <p>Kabupaten: {selectedBanjar.properties.KABUPATEN}</p>
            </div>
            <div>
              <img
                src={`${base}${selectedBanjar.properties.tothPlot}`}
                style={{ width: '175px' }}
                alt={`Toth frequency plot for ${selectedBanjar.properties.NAME}`}
              />
            </div>
            <ReactAudioPlayer
              src={`${base}${selectedBanjar.properties.audio}`}
              controls
            />
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

export default function MapContainer() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY,
    libraries: LIBRARIES,
  });

  return isLoaded ? <Map /> : <div style={{ width: '100%', height: '100vh' }} />;
}
