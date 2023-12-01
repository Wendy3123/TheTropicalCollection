import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  // const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <div className="footerContactinfo">
            {/* <strong>Contact Us</strong> */}
            <Link
              to="https://www.instagram.com/the_tropical_collection/"
              style={{ textDecoration: "none" }}
            >
              <FaInstagram />
              &nbsp; the_tropical_collection
            </Link>
            <Link
              to="https://api.whatsapp.com/send/?phone=%2B19175122690&text&type=phone_number&app_absent=0"
              style={{ textDecoration: "none" }}
            >
              <FaWhatsapp />
              &nbsp; 917-512-2690
            </Link>
          </div>

          {/* <div className="footer">
            <p>The Tropical Collection &copy; {currentYear} </p>
          </div> */}
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
