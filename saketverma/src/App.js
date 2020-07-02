import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Container, Navbar } from "react-bootstrap";
import Content from "./Components/Content";
import Education from "./Components/Education";
import ExperienceAndWork from "./Components/ExperienceAndWork";
// import ContactMe from "./Components/ContactMe";

function App() {
  // const height = screen.height;
  return (
    <div className="homepage">
      <Container className="containerMain" size="md">
        <div className="navbar-container">
          <Navbar fixed="top">
            <Navbar.Brand>
              <span
              // className="notOnMobile"
              >
                Saket Verma
              </span>
            </Navbar.Brand>
            <div className="sidebar-top mobile-only">
              <img
                className="avatar-mini shadows"
                src={require("./Images/SaketVerma.jpg")}
                alt="my Avatar"
              />
            </div>
          </Navbar>
        </div>
        <div className="container-and-sidebar">
          <div className="container-inner">
            <div className="personal shadows">
              <div className="personal-inner">
                <img
                  className="avatar shadows"
                  src={require("./Images/SaketVerma.jpg")}
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
                  </div>
                </div>
              </div>
            </div>
            <Content
              title="ABOUT ME"
              subtitle="Hello, Saket here !"
              content="I am a web designer/developer focused on crafting great web experiences.
            Designing and Coding have been my passion since the days I started working with computers.
            I enjoy creating beautifully designed, intuitive and functional websites, softwares, live wallpapers."
            />
            <div style={{ marginTop: "40px" }}>
              <Education />
            </div>
            <div style={{ marginTop: "40px" }}>
              <ExperienceAndWork />
            </div>
            {/* <div style={{ marginTop: '40px' }}>
              <ContactMe />
            </div> */}
          </div>
          <div className="sidebar-container tabletPlus ">
            <div className="sidebar">
              <img
                className="avatar-mini shadows"
                src={require("./Images/SaketVerma.jpg")}
                alt="my Avatar"
              />
            </div>
            <div className="sidebar-bottom-triangle" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
