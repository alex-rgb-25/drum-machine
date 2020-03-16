import React from 'react';
import logo from './logo.svg';
import './App.css';
import Keyboard from './Keyboard';
import Settings from './settings';

class App extends React.Component{



  constructor(props){
    super(props);
  }
  render(){

    return(
      <div class="container">

          <div id="drum-machine" style={styles}>
              <Keyboard />

    </div>
    </div>
    )
  }
}

const styles = {
  border:'2px solid black',
  borderRadius: '5px',
  width:'90%',
  margin: '0 auto',
  backgroundColor:'#3aafb9',
  marginTop:'50px'
}

export default App;
