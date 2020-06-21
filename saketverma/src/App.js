import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  // const height = screen.height;
  return (
    <div className="homepage" >
      <Container className="containerMain" maxWidth="md">
        <div className="navbar-container">
          <div className="navbar-top">
            Saket Verma
          <div className="sidebar-top mobile-only">
              Side
        </div>
          </div>
        </div>
        <div className="container-and-sidebar">
          <div className="container-inner">
            <div className="personal shadows">
              <div className="personal-inner">
                <img className="avatar shadows" src={require("./Images/myAvatar.png")} alt="my Avatar" />
                <div className="personal-info mobile-center">
                  <div className="title">
                    <h1>Saket Verma</h1>
                  </div>
                  <div className="subtitle">
                    <h5>Developer | Designer</h5>
                  </div>
                  <div className="social-media">
                    <a href="https://www.facebook.com/iamsaket.verma"><span><i className="fa fa-facebook"/></span></a>
                    <a href="https://www.instagram.com/saket.verma/"><span><i className="fa fa-instagram"/></span></a>
                    <a href="https://www.reddit.com/user/phoenix_saket"><span><i className="fa fa-reddit-alien"/></span></a>
                    <a href="https://twitter.com/phoenix_saket"><span><i className="fa fa-twitter"/></span></a>
                    <a href="https://github.com/phoenixSaket"><span><i className="fa fa-github"/></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-container tabletPlus">
            <div className="sidebar">
              Side
            <div>
              </div>
            </div>
            <div className="sidebar-bottom-triangle" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
