import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import Content from "./Components/Content";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Other from "./Components/Other";
import { Helmet } from "react-helmet";
import ContactMe from "./Components/ContactMe";
import Skills from "./Components/Skills";
// import ContactMe from "./Components/ContactMe";

function App() {
  // const height = screen.height;
  return (
    <div className="homepage">
      <Helmet>
        <title>Saket Verma</title>
        <meta name="description" content="Saket's Homepage / Digital Resume" />
        <meta name="image" content="https://raw.githubusercontent.com/phoenixSaket/saketVerma/master/saketverma/src/Images/SaketVerma.jpg" />
        <meta name="og:title" content="Saket Verma" />
        <meta name="og:description" content="Saket's Homepage / Digital Resume" />
        <meta name="og:image" content="https://raw.githubusercontent.com/phoenixSaket/saketVerma/master/saketverma/src/Images/SaketVerma.jpg" />
        <meta name="twitter:title" content="Saket Verma" />
        <meta name="twitter:description" content="Saket's Homepage / Digital Resume" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/phoenixSaket/saketVerma/master/saketverma/src/Images/SaketVerma.jpg" />
      </Helmet>
      <Container className="containerMain" size="md">
        <div className="navbar-container">
          <Navbar expand="sm">
            <div style={{ justifyContent: 'center', width: '100%', opacity: '0.9' }}>
              <div className="navbar-inner-container backgroundImage">
                <Navbar.Brand href="#">
                  <span className="topNoMobile"
                    style={{
                      cursor: 'pointer'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/saketVerma/#";
                    }}>
                    Saket Verma</span>
                </Navbar.Brand>
                <div className="toggler-custom">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  {/* </div> */}
                  <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="justify-content-end ">
                      <Nav.Link href="#content" className="nav-links">
                        About Me
                      </Nav.Link>
                      <Nav.Link href="#education" className="nav-links">
                        Education
                      </Nav.Link>
                      <Nav.Link href="#skills" className="nav-links">
                        Skills
                      </Nav.Link>
                      <Nav.Link href="#experience" className="nav-links">
                        Experience
                      </Nav.Link>
                      <Nav.Link href="#other" className="nav-links">
                        Other
                      </Nav.Link>
                      <Nav.Link href="#contactMe" className="nav-links">
                        Contact Me
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </div>
              </div>
            </div>
          </Navbar>
        </div>
        <div className="container-and-sidebar">
          <div className="container-inner">
            <div className="personal shadows">
              <div className="personal-inner">
                <img
                  className="avatar shadows"
                  src={require("./Images/photu.jpg")}
                  alt="my Avatar"
                />
                <div className="personal-info mobile-center">
                  <div className="title">
                    <h1>Saket Verma</h1>
                  </div>
                  <div className="subtitle">
                    <h5>Developer | Designer</h5>
                  </div>
                  <div className="social-media">
                    <a
                      href="https://www.facebook.com/iamsaket.verma"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>
                        <i className="fa fa-facebook" />
                      </span>
                    </a>
                    <a
                      href="https://www.instagram.com/saket.verma/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>
                        <i className="fa fa-instagram" />
                      </span>
                    </a>
                    <a
                      href="https://www.reddit.com/user/phoenix_saket"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>
                        <i className="fa fa-reddit-alien" />
                      </span>
                    </a>
                    <a
                      href="https://twitter.com/phoenix_saket"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>
                        <i className="fa fa-twitter" />
                      </span>
                    </a>
                    <a
                      href="https://github.com/phoenixSaket"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>
                        <i className="fa fa-github" />
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/developer-saket-verma"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>
                        <i className="fa fa-linkedin" />
                      </span>
                    </a>
                  </div>
                  <div className="personalContact">
                    <div className="personalPhone">
                      <i className="fa fa-phone-square" style={{ fontSize: '18px', marginRight: '10px' }}></i>
                      +91-8668692038
                    </div>
                    <div className="personalMail">
                      <i className="fa fa-envelope" style={{ fontSize: '15px', marginRight: '10px' }}></i>
                      develope.saket@gmail.com
                    </div>
                    <div className="personalMail">
                      <i className="fa fa-envelope" style={{ fontSize: '15px', marginRight: '10px' }}></i>
                      saket.verma@scrollright.com
                    </div>
                    <div className="personalMail">
                      <i className="fa fa-envelope" style={{ fontSize: '15px', marginRight: '10px' }}></i>
                      saket.verma@citiustech.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="content"
            // style={{ marginTop: "40px" }}
            >
              <Content
                title="ABOUT ME"
                subtitle="Hello, Saket here !"
                content="I am a web designer/developer focused on crafting great web experiences.
            Designing and Coding have been my passion since the days I started working with computers.
            I enjoy creating beautifully designed, intuitive and functional websites, softwares, live wallpapers."
              />
            </div>
            <div id="education"
            // style={{ marginTop: "40px" }}
            >
              <Education />
            </div>
            
            <div id="skills">
                <Skills />
              </div>

            <div id="experience"
            // style={{ marginTop: "40px" }}
            >
              <Experience />
            </div>
            <div id="other"
            // style={{ marginTop: "30px" }}
            >
              <Other />
            </div>
            <div id="contactMe">
              <ContactMe />
            </div>
          </div>
          {/* <div className="sidebar-container tabletPlus ">
            <div className="sidebar">
              <div className="sidebar-inner">
                <img
                  className="avatar-mini shadows"
                  src={require("./Images/SaketVerma.jpg")}
                  alt="my Avatar"
                />

                <div className="sidebarElement">
                  <i className="fa fa-info-circle"
                  style={{fontSize: '30px' , marginTop: '5px' }}
                  href="#content"
                  ></i>
                </div>
              </div>
            </div>
            <div className="sidebar-bottom-triangle" />
          </div> */}
        </div>
      </Container>
    </div>
  );
}

export default App;
