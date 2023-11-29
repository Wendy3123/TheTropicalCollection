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
            <div>
              <FaInstagram />
              &nbsp; the_tropical_collection
            </div>
            <div>
              <FaWhatsapp />
              &nbsp; 917-512-2690
            </div>
          </div>

          <Col className="text-center py-3">
            <p>The Tropical Collection &copy; {currentYear} </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
