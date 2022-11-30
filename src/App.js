import React from "react";
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  );
}

export default App;
