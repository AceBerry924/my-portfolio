import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from "../../assets/hero/hero-image.png";
//Components
import Button from "../ui-components/button/button";

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">Hello</h1>
            <h1 className="weight800 font60">This is Leon Alexei.</h1>
            <p className="font12">
              I am a senior Front-End Web and Hybrid Mobile Developer. I like
              dabbling in various parts of frontend development and like to
              learn about new technologies. Also, I am a self-motivated
              developer with staying up-to-date with the trending and latest
              technologies.
            </p>
            <Button label="SEND MESSAGE" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
