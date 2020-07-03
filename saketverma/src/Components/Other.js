import React, { useState } from 'react';
import "./Experience.css";
import { Carousel, Button, Tab, Tabs } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';

function openNewTab() {
  window.open("https://play.google.com/store/apps/details?id=org.kustom.wallpaper&hl=en_IN");
}

function Other() {
  const [key, setKey] = useState('KLWP');
  const photos = [
    {
      src: require('../Images/Photos/Cube.png'),
      width: 2,
      height: 2.5
    },
    {
      src: require('../Images/Photos/Globe.png'),
      width: 3,
      height: 2
    },
    {
      src: require('../Images/Photos/Bulb.png'),
      width: 2.5,
      height: 2
    },
    {
      src: require('../Images/Photos/Flower.jpg'),
      width: 2,
      height: 2.5
    },
    // {
    //   src: require('../Images/Photos/Tree.png'),
    //   width: 2,
    //   height: 2.5
    // },
    {
      src: require('../Images/Photos/Clouds.jpg'),
      width: 2.5,
      height: 2
    },
    {
      src: require('../Images/Photos/Keyboard.jpg'),
      width: 2.5,
      height: 2
    },
    // {
    //   src: require('../Images/Photos/Sky.png'),
    //   width: 2,
    //   height: 2.5
    // },
    {
      src: require('../Images/Photos/Leaves.jpg'),
      width: 10,
      height: 8
    },
    {
      src: require('../Images/Photos/Goa.png'),
      width: 4,
      height: 5
    },
  ];

  return (
    <div className="workContainer boxShadow semi-white-bg" style={{ marginTop: '30px' }}>
      <div className="padding20">
        <div className="center-text heading-sub">
          OTHER
          </div>
      </div>
      <Tabs
        id="otherWork"
        activeKey={key}
        // variant="pills"
        onSelect={(k) => setKey(k)}>
        <Tab eventKey="KLWP" title="KLWP">
          {/* <div className="miniTitle text-center">
              Kustom Live Wallpapers
            </div> */}
          <div className="carouselContainer padding-top-down">
            <Carousel interval={2000} indicators={false}>
              <Carousel.Item>
                <img alt="Quick for KLWP" src={require("../Images/KLWP/Quick.png")} style={{ width: '100%' }} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="Quick Version 2 for KLWP" src={require("../Images/KLWP/Quickv2.png")} style={{ width: '100%' }} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="Covered for KLWP" src={require("../Images/KLWP/Covered2.png")} style={{ width: '100%' }} />
              </Carousel.Item>
              <Carousel.Item>
                <img alt="Corona for KLWP" src={require("../Images/KLWP/Corona.png")} style={{ width: '100%' }} />
              </Carousel.Item>
            </Carousel>
            <div className="mini-Description padding20">
              <div className="text-center w-100 font-bold">THE ABOVE MENTIONED ARE SOME THEMES THAT I HAVE CREATED USING KLWP.</div>
              <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                KLWP stands for Kustom Live Wallpapers.
                KLWP enables you to change the theme on your android smartphone and make it customizable as you want.
                Once applied on your Lock Screen or Home Screen or both,
                the Live Wallpaper will make your device beautiful and unique and you can set it for
                various possible daily tasks and information.
                <br /><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Additionally you can use control statements, loops, APIs and can parse RSS, JSON, XML files.
                Design is basically set using semaphores and have similar concepts ike onClick event to change semaphores.
                <br /><br />
              <div className="text-center w-100 font-bold">
                <Button variant="info"
                  onClick={openNewTab}
                >
                  {/* <a className="workLink" href="https://play.google.com/store/apps/details?id=org.kustom.wallpaper&hl=en_IN"
                  rel='noopener noreferrer' target="_blank">
                  <i className="fa fa-android"></i> */}
                  KLWP on Google Play Store
                  {/* </a> */}
                </Button>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="Photography" title="Photography">
          {/* <div className="miniTitle text-center">
              Photography
            </div> */}
          <div style={{ marginTop: '20px' }}>
            <Gallery photos={photos} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Other;