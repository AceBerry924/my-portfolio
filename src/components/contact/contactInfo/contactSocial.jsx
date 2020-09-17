import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";
import { FaLinkedin, FaGithub, FaRegEnvelope } from "react-icons/fa";

const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social">
          <a
            href="https://www.linkedin.com/in/leon-a-5b1b2119b/"
            target="__blank"
          >
            <FaLinkedin />
          </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://github.com/aceberry924" target="__blank">
            <FaGithub />
          </a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <a href="mailto:meobius123@gmail.com">
            <FaRegEnvelope />
          </a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
