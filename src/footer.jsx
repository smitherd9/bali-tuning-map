import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import barongLogo from './img/barong-logo.png';

function Footer() {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col lg={12} className="footer-col">
            <div>
              <img src={barongLogo} style={{ width: '100px', height: '100px' }} alt="barong logo" loading="lazy" />
            </div>
            <div className="footer-social-div">
              <span className="footer-social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'square-facebook']} className="fa-2x" />
                </a>
              </span>
              <span className="footer-social-icons">
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'square-x-twitter']} className="fa-2x" />
                </a>
              </span>
              <span className="footer-social-icons">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="fa-2x" />
                </a>
              </span>
              <span className="footer-social-icons">
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'instagram']} className="fa-2x" />
                </a>
              </span>
            </div>
            <div>
              <a href="https://smitherd9.github.io" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faCopyright} /> 2021 Daniel Smither
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
