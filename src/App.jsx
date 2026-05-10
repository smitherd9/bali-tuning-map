import { useState, lazy, Suspense, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Header from './header';
import Description from './description';
import Footer from './footer';

const MapContainer = lazy(() => import('./map'));

library.add(fab);

function App() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  function handleFilterChange(kabupaten) {
    setActiveFilter(prev => prev === kabupaten ? null : kabupaten);
  }

  return (
    <div className="App">
      <div className="contentContainer">
        <Header darkMode={darkMode} onToggleDark={() => setDarkMode(d => !d)} />
        <Description activeFilter={activeFilter} onFilterChange={handleFilterChange} />
        <Suspense fallback={
          <div className="map-status-container">
            <div className="map-status-content">
              <div className="map-spinner" />
              <p>Loading map…</p>
            </div>
          </div>
        }>
          <MapContainer activeFilter={activeFilter} />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
