import React from "react";
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import dataArray from './data.json';
import SelectedBeast from './components/SelectedBeast';
import BeastForm from './components/BeastForm.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      beastdata: dataArray,
      selectedBeast: {},
    }
  }
  
  openModal = name => {
    let selectedBeast = dataArray.find(beast => beast.title === name)
    this.setState ({displayModal: true, selectedBeast}) 
  } 
  
  closeModal = ()=>{
    this.setState ({displayModal: false})
  }

  filterHorns = hornedItem => {
    let selectedBeast = dataArray.filter(beast => beast.horns === +(hornedItem))
    this.setState ({beastdata : selectedBeast})
  }
  
  render() {
  return (
    <Container>
      <Header/>
      <Main beastdata = {this.state.beastdata} 
        displayModal = {this.openModal}/>
        <SelectedBeast 
        openModal = {this.openModal}
        selectedBeast = {this.state.selectedBeast}
        displayModal = {this.state.displayModal}
        closeModal = {this.closeModal}
        />
        <BeastForm filterHorns = {this.filterHorns}/>
      <Footer/>
    </Container>
  );
  }
}


export default App;
