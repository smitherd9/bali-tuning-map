import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import mapStyles from './data/map-styles';
import banjarData from './data/banjar.json';
import ReactAudioPlayer from 'react-audio-player';

const LIBRARIES = ['geometry', 'drawing', 'places'];
const MAP_CENTER = { lat: -8.403449367266102, lng: 115.1592653203491 };
const MAP_CONTAINER_STYLE = { width: '100%', height: '100vh' };

function matchesFilter(banjar, activeFilter) {
  if (!activeFilter) return true;
  return banjar.properties.KABUPATEN.toLowerCase().includes(activeFilter.toLowerCase());
}

function Map({ activeFilter }) {
  const [selectedBanjar, setSelectedBanjar] = useState(null);
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    setSelectedBanjar(null);
  }, [activeFilter]);

  const visibleBanjars = banjarData.banjar.filter(b => matchesFilter(b, activeFilter));

  return (
    <GoogleMap
      options={{ styles: mapStyles.mapStyles }}
      zoom={10}
      center={MAP_CENTER}
      mapContainerStyle={MAP_CONTAINER_STYLE}
    >
      {visibleBanjars.map((banjar) => (
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
                loading="lazy"
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

export default function MapContainer({ activeFilter }) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY,
    libraries: LIBRARIES,
  });

  if (loadError) {
    return (
      <div className="map-status-container">
        <div className="map-status-content">
          <p className="map-error-title">Unable to load the map</p>
          <p className="map-error-body">
            Check your internet connection and refresh the page. If the problem
            persists, the Google Maps API may be temporarily unavailable.
          </p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="map-status-container">
        <div className="map-status-content">
          <p>Loading map…</p>
        </div>
      </div>
    );
  }

  return <Map activeFilter={activeFilter} />;
}
