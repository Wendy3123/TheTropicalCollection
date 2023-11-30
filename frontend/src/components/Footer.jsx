import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <div className="footerContactinfo">
            <strong>Contact Us</strong>
            <div>
              <FaInstagram />
              &nbsp; the_tropical_collection
            </div>
            <div>
              <FaWhatsapp />
              &nbsp; 917-512-2690
            </div>
          </div>

          <div className="footer">
            <p>The Tropical Collection &copy; {currentYear} </p>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
