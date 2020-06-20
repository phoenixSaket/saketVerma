import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="homepage">
      <Navbar style={{ backgroundColor: '#0D47A1' }} fixed="top" variant="dark">
        <Navbar.Brand href="#home">Saket Verma</Navbar.Brand>
      </Navbar>
      <Container maxWidth="xl">
        <div className="App">
          Hello There. This is supposed to be my website.
          Work is in progress.
          Please fucking be patient !!
        </div>
      </Container>
    </div>
  );
}

export default App;
