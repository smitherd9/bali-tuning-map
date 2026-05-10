import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Header from './header';
import MapContainer from './map';
import Description from './description';
import Footer from './footer';

library.add(fab);

function App() {
  return (
    <div className="App">
      <div className="contentContainer">
        <Header />
        <Description />
        <MapContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
