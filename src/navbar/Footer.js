import React from 'react';
import './Footer.css';
import logo1 from '../img/logo1.jpeg';
import mettleSol from '../img/mettleSol.jpeg';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
      <Row className="bg-success text-white text-center m-auto ">
        <Col md="3">
          <div className="bg-danger rounded text-center mb-2">COMPANY NAME</div>
          <Row>
            <Col sm="12r">MettleSol</Col>
          </Row>
          <Row>
            <Col>
              <img src={mettleSol} className="image-log" alt="mettleSol" />;
            </Col>
          </Row>
        </Col>
        <Col md="3">
          <div className="bg-danger rounded mb-2 text-center">PRODUCTS</div>
          <div>WEb Development</div>
          <div>Mobile App</div>
          <div>WorkShop</div>
        </Col>
        <Col md="3">
          <div className="bg-danger rounded mb-2 text-center">USEFUL LINKS</div>
          <div>
            <Link className="text-white m-auto" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="text-white m-auto" to="/about">
              About
            </Link>
          </div>
          <div>
            <Link className="text-white m-auto" to="/contact">
              Contact Us
            </Link>
          </div>
        </Col>
        <Col md="3">
          <div className="bg-danger mb-2 rounded text-center">CONTACT US</div>

          <div>
            <label>
              Sir Ahsan Ali
              <div>03030266005</div>
            </label>
          </div>
          <label>
            Miss Sana HR
            <div>03104474914</div>
          </label>
        </Col>
        <Row>
          <Col md="12">
            <div className="text-white mt-md-3 p-3 bg-dark rounded text-center">
              @Powered By MettleSol
              <img src={logo1} className=" ms-2 image-logo" alt="logo1" />
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Footer;
