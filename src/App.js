import React from 'react';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import './App.css';

function App() {
  const handleCall = () => {
    window.location.href = 'tel:02073941593';
  };

  return (
    <div className="App">
      {/* Navigation */}
      <Navbar expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">🦷 The Grange Dental Surgery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services & Pricing</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero">
        <Container>
          <h1>Welcome to The Grange Dental Surgery</h1>
          <p>Professional dental care in Bermondsey, London</p>
          <Button className="btn-call" onClick={handleCall} size="lg">
            📞 Call: 020 7394 1593
          </Button>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <Container>
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Your Local Dental Practice</h3>
              <p>
                The Grange Dental Surgery is a trusted dental clinic located in
                Bermondsey, London. With over 3000 active patients, we're
                committed to providing excellent dental care to our community.
              </p>
              <div className="info-box">
                <strong>📍 Location:</strong>
                <p>134 Grange Rd, London SE1 3GF</p>
              </div>
              <div className="info-box">
                <strong>📞 Phone:</strong>
                <p>020 7394 1593</p>
              </div>
              <div className="info-box">
                <strong>⏰ Hours:</strong>
                <p>Mon - Fri 9:00 AM - 5:00 PM</p>
                <p>Closed Sat & Sun </p>
                <p>Closed between 1pm - 2pm for lunch </p>
                <p
                  style={{
                    fontSize: '0.9rem',
                    marginTop: '0.5rem',
                    color: '#999',
                  }}
                >
                  Good Friday might affect these hours
                </p>
              </div>
            </div>
            <div>
              <div className="info-box">
                <h4 style={{ color: 'var(--teal)', marginBottom: '1rem' }}>
                  Your Appointment
                </h4>
                <p>
                  To book an appointment or discuss your dental needs, please
                  call us at
                  <strong
                    style={{
                      display: 'block',
                      marginTop: '0.5rem',
                      fontSize: '1.2rem',
                    }}
                  >
                    020 7394 1593
                  </strong>
                </p>
                <p
                  style={{
                    fontSize: '0.9rem',
                    marginTop: '1rem',
                    color: '#999',
                  }}
                >
                  Our friendly team will be happy to help you schedule a
                  convenient time.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services & Pricing Section */}
      <section id="services" className="section section-light">
        <Container>
          <h2>NHS Dental Bands & Pricing</h2>

          <div className="pricing-details">
            <h4>Understanding NHS Dental Charges</h4>
            <p>
              Our practice offers NHS dental services with clear, transparent
              pricing. Below you'll find information about the three treatment
              bands and what they include.
            </p>
          </div>

          <div className="pricing-grid">
            {/* Band 1 */}
            <div className="pricing-card">
              <h3>Band 1: Routine Exam</h3>
              <div className="price">£27.90</div>
              <ul>
                <li>Routine dental examination and assessment</li>
                <li>X-rays, if clinically needed</li>
                <li>Fluoride treatment</li>
                <li>Simple gum disease management</li>
                <li>Tooth moulds and impressions</li>
                <li>Denture adjustments</li>
              </ul>
            </div>

            {/* Band 2 */}
            <div className="pricing-card">
              <h3>Band 2: Complex Treatment</h3>
              <div className="price">£76.60</div>
              <ul>
                <li>All Band 1 treatments, plus:</li>
                <li>Fillings</li>
                <li>Root canal treatment</li>
                <li>Tooth extraction & oral surgery</li>
                <li>Tooth sealants</li>
                <li>Extensive denture work</li>
                <li>White fillings (when needed)</li>
                <li>Extensive gum disease treatment</li>
              </ul>
            </div>

            {/* Band 3 */}
            <div className="pricing-card">
              <h3>Band 3: Advanced Treatment</h3>
              <div className="price">£332.10</div>
              <ul>
                <li>All Band 1 & 2 treatments, plus:</li>
                <li>Dental crowns</li>
                <li>Inlays and onlays</li>
                <li>Dentures (plastic or metal)</li>
                <li>Dental bridges</li>
                <li>Orthodontic treatment (braces)</li>
                <li>Custom-made appliances</li>
              </ul>
            </div>
          </div>

          {/* Additional Details */}
          <div className="pricing-details">
            <h4>Gum Treatment & Scaling</h4>
            <p>
              If your dentist determines scaling is clinically needed, it's
              usually included in Band 1 (£27.40). Extensive treatment for
              complex gum problems may be charged as Band 2 (£75.30). Scaling
              not deemed clinically necessary must be paid privately.
            </p>

            <h4>White Fillings</h4>
            <p>
              White fillings are available on the NHS when clinically necessary,
              especially for front teeth. Back teeth may receive silver amalgam
              fillings, which are more effective. Your dentist will discuss all
              options with you.
            </p>

            <h4>Root Canal Treatment</h4>
            <p>
              Root canal treatment to address infections or inflammation is
              available on the NHS. For more complex cases, you may be referred
              to a specialist service, or you can choose private treatment.
            </p>

            <h4>Wisdom Tooth Removal</h4>
            <p>
              Wisdom teeth can be removed on the NHS when clinically necessary.
              Your dentist may perform the extraction or refer you to a
              specialist service.
            </p>

            <h4>Urgent Dental Treatment - £27.90</h4>
            <p>
              We offer urgent dental care appointments when needed. Urgent
              treatment can include examination, X-rays, temporary fillings,
              emergency root canal treatment, tooth injury management, denture
              adjustments, dental abscess drainage, and management of sudden
              severe conditions.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '1rem' }}>
              Additional treatment may be required after urgent appointments,
              which may have additional costs.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <Container>
          <h2>Get In Touch</h2>
          <div className="contact-info">
            <div className="contact-card">
              <h4>📍 Address</h4>
              <p>
                134 Grange Rd
                <br />
                Bermondsey
                <br />
                London SE1 3GF
              </p>
            </div>
            <div className="contact-card">
              <h4>📞 Call Us</h4>
              <p>
                <a href="tel:02073941593">020 7394 1593</a>
              </p>
              <p
                style={{ fontSize: '0.9rem', color: '#999', marginTop: '1rem' }}
              >
                To book your appointment, please call during office hours
              </p>
            </div>
            <div className="contact-card">
              <h4>🌐 Online</h4>
              <p>
                Visit our Google Business listing for more information and
                reviews
              </p>
              <Button
                href="https://www.google.com/maps/search/The+Grange+Dental+Surgery+London"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                size="sm"
              >
                View on Google Maps
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer>
        <Container>
          <p>&copy; 2026 The Grange Dental Surgery. All rights reserved.</p>
          <p>
            134 Grange Rd, London SE1 3GF |
            <a href="tel:02073941593"> 020 7394 1593</a>
          </p>
          <p style={{ fontSize: '0.9rem', marginTop: '1rem', opacity: 0.8 }}>
            Please call to book your appointment
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
