import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import FlyLineImage from "../../assets/portfolio/fly-line.png";
import OpenSpaceImage from "../../assets/portfolio/open-spaces.png";
import CoCreateImage from "../../assets/portfolio/co-create.png";
import GumptionImage from "../../assets/portfolio/gumption.png";
import CasalovaImage from "../../assets/portfolio/casalova.png";
import TapTacImage from "../../assets/portfolio/tap-tac.png";
import EmnImage from "../../assets/portfolio/emn.png";
import CasperImage from "../../assets/portfolio/casper.png";
import ValueChainImage from "../../assets/portfolio/value-chain.png";

//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: OpenSpaceImage,
          title: "Open Spaces",
          core: "( React, Gatsby, Grid CSS )",
          tag: "web",
          url: "https://getopenspaces.com/",
        },
        {
          id: "2",
          preview: FlyLineImage,
          title: "FlyLine",
          core: "( Vue, Scratch )",
          tag: "web",
          url: "https://flyline.io/",
        },
        {
          id: "3",
          preview: CoCreateImage,
          title: "Co-create",
          core: "( Vue, Bootstrap, FullPage.JS )",
          tag: "web",
          url: "https://www.co-create-the-future.eu/",
        },
        {
          id: "4",
          preview: CasalovaImage,
          title: "Casalova",
          core: "( React )",
          tag: "web",
          url: "https://www.casalova.com/",
        },
        {
          id: "5",
          preview: GumptionImage,
          title: "Gumption",
          core: "( CraftCMS 3, Bootstrap 4 )",
          tag: "web",
          url: "https://www.gumption.be/",
        },
        {
          id: "6",
          preview: TapTacImage,
          title: "TapTac",
          core: "( PHP, Bootstrap 4 )",
          tag: "web",
          url: "https://taptac.com/",
        },
        {
          id: "7",
          preview: ValueChainImage,
          title: "Value Chain",
          core: "( Ionic 5, Sendbird SDK )",
          tag: "hybrid",
          url:
            "https://play.google.com/store/apps/details?id=com.liftov.thevaluechainsharebox",
        },
        {
          id: "8",
          preview: CasperImage,
          title: "Casper",
          core: "( React, Grid CSS, Scratch )",
          tag: "web",
          url: "https://casper.com/",
        },
        {
          id: "9",
          preview: EmnImage,
          title: "EMN Glossary",
          core: "( React Native, Expo )",
          tag: "hybrid",
          url:
            "https://play.google.com/store/apps/details?id=it.ittigcnr.emnglossary&hl=en",
        },
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST",
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({
      filterResult: result,
      pickedFilter: target,
      pickedFilterDropdown: "NEWEST",
    });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if (event) {
      this.setState({ filterMenuActive: true });
    } else {
      this.setState({ filterMenuActive: false });
    }
  };

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result });
  };

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <a href={project.url} target="__blank" key={project.id}>
          <ProjectBox
            preview={project.preview}
            title={project.title}
            core={project.core}
          />
        </a>
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDropDown = null;
    if (this.state.filterMenuActive) {
      filterDropDown = (
        <div className="portfolio__filter-menu shadow">
          <p
            className="font12"
            onClick={() => this.filterDropDownHandler("NEWEST")}
          >
            NEWEST
          </p>
          <p
            className="font12"
            onClick={() => this.filterDropDownHandler("OLDEST")}
          >
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="WORK SHOWCASE." />
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
                <ul>
                  <li
                    className={
                      this.state.pickedFilter === "all"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("all")}
                  >
                    ALL
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "web"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("web")}
                  >
                    WEBSITE
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "hybrid"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("hybrid")}
                  >
                    HYBRID APP
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <div
                className="portfolio__filter"
                onMouseEnter={() => this.filterMenuHover(true)}
                onMouseLeave={() => this.filterMenuHover(false)}
              >
                <p className="font12">
                  {this.state.pickedFilterDropdown} FIRST
                </p>
                <img src={Arrow} alt="arrow" />
                {filterDropDown}
              </div>
            </Col>
          </Row>
          <Masonry
            breakpointCols={portfolioBreakpoints}
            className="my-masonry-grid"
            columnClassName="mint__gallery"
          >
            {projectsRender}
          </Masonry>
          <Row className="flex-center padding40">
            <Button label="HAVE WORK FOR US?" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
