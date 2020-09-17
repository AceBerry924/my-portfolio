import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import Title from "../ui-components/title/title";
// Assets

import AngularLogo from "../../assets/about/angular.svg";
import ReactLogo from "../../assets/about/react.svg";
import HTMLLogo from "../../assets/about/html.svg";
import CSSLogo from "../../assets/about/css.svg";
import JqueryLogo from "../../assets/about/jquery.svg";
import GraphQLLogo from "../../assets/about/graphql.svg";
import CraftCMSLogo from "../../assets/about/craft-cms.svg";
import IonicLogo from "../../assets/about/ionic.svg";
import JavascriptLogo from "../../assets/about/javascript.svg";
import BootstrapLogo from "../../assets/about/bootstrap.svg";
import NodeJSLogo from "../../assets/about/nodejs.svg";
import ReduxLogo from "../../assets/about/redux.svg";
import SassLogo from "../../assets/about/sass.svg";
import TailWindLogo from "../../assets/about/tailwind.svg";
import VueLogo from "../../assets/about/vue.svg";

const techLogos = [
  {
    name: "HTML",
    logo: HTMLLogo,
  },
  {
    name: "CSS",
    logo: CSSLogo,
  },
  {
    name: "JavaScript",
    logo: JavascriptLogo,
  },
  {
    name: "Sass",
    logo: SassLogo,
  },
  {
    name: "Bootstrap",
    logo: BootstrapLogo,
  },
  {
    name: "TailWind CSS",
    logo: TailWindLogo,
  },
  {
    name: "Angular 2+",
    logo: AngularLogo,
  },
  {
    name: "React",
    logo: ReactLogo,
  },
  {
    name: "Redux",
    logo: ReduxLogo,
  },
  {
    name: "Vue",
    logo: VueLogo,
  },
  {
    name: "GraphQL",
    logo: GraphQLLogo,
  },
  {
    name: "NodeJS",
    logo: NodeJSLogo,
  },
  {
    name: "Craft CMS",
    logo: CraftCMSLogo,
  },
  {
    name: "jQuery",
    logo: JqueryLogo,
  },
  {
    name: "Ionic",
    logo: IonicLogo,
  },
];

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT ME." />
      <p className="font20">
        I am a senior Front-End Web and Hybrid Mobile Developer who has passion
        for responsive web design and a firm believer in the mobile-first
        approach. <br />I like dabbling in various parts of frontend development
        and like to learn about new technologies. <br />
        Also, I am a self-motivated developer with staying up-to-date with the
        trending and latest technologies. <br />I normally work in CEST and have
        full experience with remote working, since I worked for EU or US clients
        so far.
      </p>

      <h3 className="font40 weight800">Tech Stacks</h3>
      <Row>
        {techLogos.map((tech, id) => (
          <Col xs={6} md={3} className="tech-card">
            <div className="tech-card__wrapper">
              <img className="tech-logo" src={tech.logo} alt="stack-logo" />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default about;
