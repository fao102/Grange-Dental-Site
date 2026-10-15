import React from 'react';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import './App.css';

const phoneNumber = '020 7394 1593';
const phoneLink = 'tel:02073941593';
const emailAddress = 'thegrangedental@hotmail.com';
const emailLink = `mailto:${emailAddress}`;
const mapsLink =
  'https://www.google.com/maps/search/?api=1&query=The+Grange+Dental+Surgery+134+Grange+Road+London+SE1+3GF';

function App() {
  return (
    <div className="App">
      <div className="topline">
        <Container className="topline-inner">
          <span>Independent care for Bermondsey</span>
          <a href={phoneLink}>Call the practice: {phoneNumber}</a>
        </Container>
      </div>

      <Navbar expand="lg" sticky="top" className="site-nav">
        <Container>
          <Navbar.Brand href="#home" className="brand-lockup">
            <span className="brand-mark" aria-hidden="true">
              G
            </span>
            <span className="brand-copy">
              <strong>The Grange</strong>
              <small>Dental Surgery · Bermondsey</small>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="primary-navigation"
            aria-label="Toggle navigation"
          />
          <Navbar.Collapse id="primary-navigation">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services &amp; Pricing</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Button className="nav-call" href={phoneLink}>
                Call {phoneNumber}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <section className="hero" id="home">
          <Container className="hero-layout">
            <div className="hero-copy">
              <h1>Dental care in Bermondsey</h1>
              <p className="hero-intro">
                The Grange Dental Surgery is a local practice caring for our
                Bermondsey community. Call our team to arrange your visit.
              </p>
              <div className="hero-actions">
                <Button className="btn-call" href={phoneLink} size="lg">
                  Call: {phoneNumber}
                </Button>
                <a className="text-link" href="#services">
                  Explore NHS fees <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="hero-note">
                <p>
                  <strong>Appointments by phone</strong>
                  <br />
                  Our team can help you find a suitable time.
                </p>
              </div>
            </div>
            <div className="hero-visual">
              <div className="address-plaque">
                <p>Find us on Grange Road</p>
                <div className="address-mark">
                  <span>134</span>
                  <strong>Grange Road</strong>
                </div>
                <p className="address-district">Bermondsey · London</p>
                <p className="address-postcode">SE1 3GF</p>
                <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                  Get directions <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </Container>
          <div className="hero-bottomline" aria-hidden="true" />
        </section>

        <section id="about" className="section about-section">
          <Container>
            <div className="section-heading">
              <h2>Good dental care, rooted in the neighbourhood.</h2>
            </div>
            <div className="about-layout">
              <div className="about-intro">
                <p className="lead-copy">
                  The Grange Dental Surgery is a local practice on Grange Road,
                  caring for patients from Bermondsey and the surrounding area.
                </p>
                <p>
                  Whether you are arranging a routine check-up or need advice
                  about treatment, give our team a call. We’ll be happy to help.
                </p>
                <a className="text-link" href="tel:02073941593">
                  Talk to our team <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="practice-facts">
                <div className="fact-row">
                  <div>
                    <h3>Visit us</h3>
                    <p>
                      134 Grange Rd
                      <br />
                      London SE1 3GF
                    </p>
                  </div>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get directions to The Grange Dental Surgery"
                  >
                    Get directions
                  </a>
                </div>
                <div className="fact-row">
                  <div>
                    <h3>Call us</h3>
                    <p>
                      <a href={phoneLink}>{phoneNumber}</a>
                    </p>
                  </div>
                  <a
                    href={phoneLink}
                    aria-label="Call The Grange Dental Surgery"
                  >
                    Call the practice
                  </a>
                </div>
                <div className="fact-row">
                  <div>
                    <h3>Opening hours</h3>
                    <p>
                      Monday–Friday, 9am–5pm
                      <br />
                      Closed 1pm–2pm for lunch
                      <br />
                      Closed weekends
                    </p>
                  </div>
                </div>
                <p className="holiday-note">
                  Good Friday may affect these hours.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section id="services" className="section fees-section">
          <Container>
            <div className="fees-heading">
              <div className="section-heading">
                <h2>NHS dental fees</h2>
              </div>
              <p>
                NHS treatment is grouped into bands. You pay one charge for a
                complete course of treatment within the same band, even if it
                takes more than one appointment.
              </p>
            </div>

            <div className="pricing-grid">
              <article className="pricing-card">
                <div className="band-details">
                  <h3>Band 1</h3>
                  <p className="band-summary">Routine examination</p>
                  <p className="price">£27.90</p>
                </div>
                <ul>
                  <li>Examination, assessment and advice</li>
                  <li>X-rays, when clinically needed</li>
                  <li>Fluoride treatment, if needed</li>
                  <li>
                    Simple gum treatment and scaling, when clinically needed
                  </li>
                  <li>Tooth moulds and bite assessment</li>
                  <li>Minor denture or orthodontic adjustments</li>
                </ul>
              </article>
              <article className="pricing-card pricing-card-featured">
                <div className="band-details">
                  <h3>Band 2</h3>
                  <p className="band-summary">Treatment beyond Band 1</p>
                  <p className="price">£76.60</p>
                </div>
                <ul>
                  <li>All treatment included in Band 1</li>
                  <li>Fillings and tooth sealants</li>
                  <li>Root canal treatment</li>
                  <li>Extractions and other oral surgery</li>
                  <li>Extensive denture work</li>
                  <li>Extensive gum disease treatment</li>
                </ul>
              </article>
              <article className="pricing-card">
                <div className="band-details">
                  <h3>Band 3</h3>
                  <p className="band-summary">Advanced treatment</p>
                  <p className="price">£332.10</p>
                </div>
                <ul>
                  <li>All treatment included in Bands 1 and 2</li>
                  <li>Crowns, inlays and onlays</li>
                  <li>Plastic or metal dentures</li>
                  <li>Dental bridges</li>
                  <li>Clinically necessary orthodontic treatment</li>
                  <li>Other custom-made appliances</li>
                </ul>
              </article>
            </div>

            <div className="urgent-care">
              <div className="urgent-label">
                <span>When you need care sooner</span>
              </div>
              <div className="urgent-copy">
                <h3>Urgent dental treatment</h3>
                <p>
                  May include an assessment, X-rays, temporary dressing,
                  emergency partial root canal treatment, injury care, removal
                  of up to two teeth, abscess drainage, infection care, denture
                  adjustments or other urgent treatment for sudden severe
                  conditions.
                </p>
              </div>
              <div className="urgent-price">
                <span>Urgent course</span>
                <strong>£27.90</strong>
              </div>
            </div>
            <p className="fees-footnote">
              A dentist will explain which treatment is clinically appropriate.
              Further treatment after an urgent appointment may have additional
              charges. Some options may be available privately; your dentist can
              discuss costs, benefits and alternatives with you.
            </p>

            <div className="treatment-notes">
              <article>
                <h3>Gum treatment &amp; scaling</h3>
                <p>
                  Scaling is available on the NHS when clinically needed. It is
                  usually included in Band 1; extensive treatment or complex gum
                  problems may fall into Band 2. Scaling that is not clinically
                  necessary is private treatment.
                </p>
              </article>
              <article>
                <h3>White fillings</h3>
                <p>
                  White fillings may be provided on the NHS when clinically
                  necessary, such as for front teeth. For back teeth, your
                  dentist will explain suitable options, including amalgam, and
                  discuss any private costs.
                </p>
              </article>
              <article>
                <h3>Root canals &amp; wisdom teeth</h3>
                <p>
                  NHS root canal treatment and wisdom tooth removal may be
                  available when clinically necessary. More complex cases may be
                  referred to a specialist service; private treatment may also
                  be an option.
                </p>
              </article>
              <article>
                <h3>Crowns &amp; orthodontics</h3>
                <p>
                  Band 3 may include crowns, bridges and orthodontics when
                  clinically necessary. Your dentist will discuss suitability,
                  alternatives, and any future maintenance with you.
                </p>
              </article>
            </div>
            <p className="fees-disclaimer">
              NHS charges can change. Please call us to confirm current fees and
              discuss your individual treatment plan.
            </p>
          </Container>
        </section>

        <section id="contact" className="contact-section">
          <Container className="contact-layout">
            <div className="contact-copy">
              <h2>Get In Touch</h2>
              <p>
                For appointments and enquiries, call the practice during opening
                hours. We don’t offer online booking.
              </p>
              <Button className="btn-call" href={phoneLink} size="lg">
                Call: {phoneNumber}
              </Button>
            </div>
            <div className="contact-details">
              <div>
                <span>Find the practice</span>
                <p>134 Grange Rd</p>
                <p>
                  Bermondsey
                  <br />
                  London SE1 3GF
                </p>
                <Button
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="maps-button"
                  size="sm"
                >
                  View on Google Maps
                </Button>
              </div>
              <div>
                <span>Call the team</span>
                <p>
                  <a className="contact-phone" href={phoneLink}>
                    {phoneNumber}
                  </a>
                </p>
                <small>
                  Monday–Friday, 9am–5pm
                  <br />
                  Closed 1pm–2pm for lunch
                </small>
                <div className="email-contact">
                  <span>Email the practice</span>
                  <p>
                    <a href={emailLink}>{emailAddress}</a>
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="site-footer">
        <Container className="footer-inner">
          <a className="footer-brand" href="#home">
            The Grange <span>Dental Surgery · Bermondsey</span>
          </a>
          <p>134 Grange Rd, London SE1 3GF</p>
          <a href={phoneLink}>{phoneNumber}</a>
          <span>© {new Date().getFullYear()} The Grange Dental Surgery</span>
        </Container>
      </footer>
    </div>
  );
}

export default App;
