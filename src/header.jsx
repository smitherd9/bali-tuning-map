import './App.css';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import baliMask from './img/bali_mask.webp';

function Header({ darkMode, onToggleDark }) {
  return (
    <div className="header">
      <Nav>
        <div className="menu-icon">
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        <div className="logo">
          BALI GAMELAN MAP
          <div className="logo-img">
            <a href="#"><img className="mask-logo" src={baliMask} alt="Bali mask logo" /></a>
          </div>
        </div>
        <div className="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li>
              <button className="dark-mode-toggle" onClick={onToggleDark} aria-label="Toggle dark mode">
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              </button>
            </li>
          </ul>
        </div>
      </Nav>
    </div>
  );
}

export default Header;
