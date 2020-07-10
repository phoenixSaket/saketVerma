import React, { useState, useCallback } from 'react';
import "./Experience.css";
import { Carousel, Button, Tab, Tabs, Modal } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';

function openNewTab(link) {
  window.open(link);
}

function Other() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  // console.log(screenHeight, screenWidth)
  const [show, setShow] = useState(false);
  const [key, setKey] = useState('KLWP');
  const [currentImage, setCurrentImage] = useState(0);
  const openIndexSetter = useCallback((event, { index }) => {
    setShow(true);
    setCurrentImage(index);
  }, []);
  const photos = [
    {
      src: require('../Images/Photos/Cube.png'),
      width: 2,
      height: 2.5
    },
    {
      src: require('../Images/Photos/Globe.png'),
      width: 3.4,
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

  const photosFull = [
    require('../Images/Full-Photos/Cube.png'),
    require('../Images/Full-Photos/Globe.png'),
    require('../Images/Full-Photos/Bulb.png'),
    require('../Images/Full-Photos/Flower.jpg'),
    require('../Images/Full-Photos/Clouds.jpg'),
    require('../Images/Full-Photos/Keyboard.jpg'),
    require('../Images/Full-Photos/Leaves.jpg'),
    require('../Images/Full-Photos/Goa.png')
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
                <Carousel.Caption>
                  <Button variant="light" onClick={() => openNewTab("https://www.reddit.com/r/androidthemes/comments/hbkloq/theme_quick_android_11_quick_settings_based_live/?utm_source=share&utm_medium=web2x")}>Quick for KLWP</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img alt="Quick Version 2 for KLWP" src={require("../Images/KLWP/Quickv2.png")} style={{ width: '100%' }} />
                <Carousel.Caption>
                  <Button variant="light" onClick={() => openNewTab("https://www.reddit.com/r/androidthemes/comments/hcrym9/theme_quick_android_11/?utm_source=share&utm_medium=web2x")}>Quick Version 2 for KLWP</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img alt="Covered for KLWP" src={require("../Images/KLWP/Covered.png")} style={{ width: '100%' }} />
                <Carousel.Caption>
                  <Button variant="light" onClick={() => openNewTab("https://www.reddit.com/r/kustom/comments/dkq0zr/theme_covered_klwp/?utm_source=share&utm_medium=web2x")}>Covered for KLWP</Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img alt="Corona Live for KLWP" src={require("../Images/KLWP/Corona.png")} style={{ width: '100%' }} />
                <Carousel.Caption>
                  <Button variant="light" onClick={() => openNewTab("https://www.reddit.com/r/androidthemes/comments/frrhb3/theme_corona_stats/?utm_source=share&utm_medium=web2x")}>Corona Live for KLWP</Button>
                </Carousel.Caption>
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
                  onClick={() => openNewTab("https://play.google.com/store/apps/details?id=org.kustom.wallpaper&hl=en_IN")}
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
            <Gallery photos={photos} onClick={openIndexSetter} />
          </div>
        </Tab>
      </Tabs>
      <Modal
        show={show}
        centered
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <i className="fa fa-chevron-circle-left"
          onClick={
            () => {
              if (currentImage === 0) {
                setCurrentImage(7)
              } else {
                setCurrentImage(currentImage - 1)
              }
            }
          }
        />
        <img src={photosFull[currentImage]} alt="clicked"
          style={{
            maxWidth: `${screenWidth}px`,
            maxHeight: `${screenHeight}px`,
            // width: 'fit-content',
            // height: 'fit-content'
          }}
        />
        <i className="fa fa-times-circle"
          onClick={
            () => {
              setShow(false)
            }
          }
        />
        <i className="fa fa-chevron-circle-right"
          onClick={
            () => {
              if (currentImage === 7) {
                setCurrentImage(0)
              } else {
                setCurrentImage(currentImage + 1)
              }
            }
          }
        />
      </Modal>
    </div>
  );
}

export default Other;