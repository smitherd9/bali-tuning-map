import './App.css';
import nagra2 from './img/Nagra-IV-S_2.jpg';
import kudelski from './img/kudelski-slo-resolver.jpg';
import hale from './img/hale-sight-o-tuner-1970s.jpg';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';

const KABUPATEN_FILTERS = ['Badung', 'Gianyar', 'Denpasar'];

function Description({ activeFilter, onFilterChange }) {
  return (
    <div className="description">
      <Container fluid>
        <Row>
          <Col xs={12} className="nagra nagra-main">
            <h2 className="main-text">
              In 1976, the ethnomusicologist Andrew Toth measured the
              tunings of each bronze key and gong-kettle of 49 complete sets of
              gong keybar.
            </h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} className="nagra text-col-nagra">
            <p className="text-p-nagra">
              His notes state, "The tunings of approximately half of them were
              measured live, while the others were recorded on a
              <a
                href="https://www.redsharknews.com/audio/item/6347-one-audio-recorder-to-rule-them-all-a-look-back-at-the-nagra-iv"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Nagra-IV-S tape recorder
              </a>{' '}
              (<em>pictured at right</em>) with crystal synchronization pulse. The tapes
              were later played back at correct speed by using a Kudelski Slo
              Resolver. In both instances, the measurements were made with the
              Hale-Sight-o-Tuner, a Stroboconn-type device which is solid state,
              portable and accurate to +/- 0.5 cent. All pitch measurements were
              made in terms of deviation from Western equal temperament, with
              the octave defined as 1200 cents and the half step as 100 cents."
            </p>
          </Col>
          <Col xs={12} md={4} className="nagra">
            <div style={{ width: '100%', textAlign: 'center' }}>
              <img src={nagra2} style={{ width: '75%', border: '1px solid black' }} alt="Nagra IV-S" />
              <p><em>Nagra IV-S</em></p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} className="nagra">
            <div style={{ width: '100%', textAlign: 'center' }}>
              <img src={kudelski} style={{ width: '75%', border: '1px solid black' }} alt="Kudelski Slo Resolver" />
              <p><em>Kudelski Slo Resolver</em></p>
            </div>
            <br />
            <div style={{ width: '100%', textAlign: 'center' }}>
              <img src={hale} style={{ width: '75%', border: '1px solid black' }} alt="Hale Sight-o-Tuner 1970s" />
              <p><em>Hale Sight-o-Tuner (1970s)</em></p>
            </div>
          </Col>
          <Col xs={12} md={8} className="nagra text-col-nagra">
            <p className="text-p-nagra">
              His meticulously gathered data has been stored in the special collections at Wesleyan
              University Library which includes seven boxes of "his letters, photographs,
              concert notices, course notes, and computer printouts of tuning frequencies<sup><a href="#citation1">1</a></sup>."
            </p>
            <p className="text-p-nagra">This project uses Toth's handwritten notes for each key in each gamelan.
              That data was then put into&nbsp;
              <a href="https://www.soniccouture.com/en/products/31-ethnic/g26-balinese-gamelan-ii/"
                target="_blank" rel="noreferrer">
                Soniccouture's Balinese Gamelan II VST</a>, which was created by
                sampling the gamelan semaradana belonging to the London Symphony Orchestra.
            </p>
            <p className="text-p-nagra">You may notice that not all instruments are present
              in all the audio clips. This is because (as far as I know) data for those instruments
              was not available, either because Andrew Toth did not record the data or that particular
              ensemble did not have those instruments in the late 70s. Similarly, you may hear more instruments
              as some gamelan had penyacah, some didn't, and some had two pairs of pemade/kantil while others
              only had one.</p>
            <p className="text-p-nagra">It is hoped that this will allow the listener a glimpse
              into the wildly diverse and beautiful world of Balinese tuning preferences
              (<em>from your own home!</em>) by hearing samples of pieces played on different gamelan.</p>
            <p id="citation1" className="citation"><em>1. Vitale, Wayne and Sethares, Bill, 2021. "Balinese Gamelan Tuning: The Toth Archives," in&nbsp;
              <a href="http://www.aawmjournal.com/articles/2021b/Vitale_Sethares_AAWM_Vol_9_2.html" target="_blank" rel="noreferrer">Analytical Approaches to World Music</a>.</em>
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="nagra">
            <h2 className="main-text">
              Click on a pin on the map below and you'll see information about which banjar you
              are listening to, which district (kabupaten) it is located in and the
              ensemble ID in Andrew Toth's data.
            </h2>
            <p className="small-description">Currently, only a short section of a piece called
              Kosalia Arini is playable, but this will change as I work through the
              tedious process of mastering the art of tukang laras digital.
              In short... <br /><em>STAY TUNED!</em>
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ButtonGroup className="kab-buttons">
              <Button
                variant={activeFilter === null ? 'primary' : 'outline-primary'}
                size="lg"
                onClick={() => onFilterChange(null)}
              >
                All
              </Button>
              {KABUPATEN_FILTERS.map(kab => (
                <Button
                  key={kab}
                  variant={activeFilter === kab ? 'primary' : 'outline-primary'}
                  size="lg"
                  onClick={() => onFilterChange(kab)}
                >
                  {kab}
                </Button>
              ))}
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Description;
