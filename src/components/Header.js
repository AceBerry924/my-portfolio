import React from 'react';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class Header extends React.Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <Particles 
          className="particles"
          params={particlesOptions} 
        />
        <header id="home">
          <nav id="nav-wrap">
              <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
              <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              </ul>
          </nav>

          <div className="row banner">
              <div className="banner-text">
                <h1 className="responsive-headline">I am {resumeData.name}.</h1>
                <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
                  I am a {resumeData.role}.{resumeData.roleDescription}
                </h3>
                <hr/>
                <ul className="social">
                {
                  resumeData.socialLinks && resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank"><i className={item.className}></i></a>
                      </li>
                    )
                  })
                }
                </ul>
              </div>
          </div>

          <p className="scrolldown">
              <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p>

        </header>
      </React.Fragment>
    );
  }
}

export default Header;