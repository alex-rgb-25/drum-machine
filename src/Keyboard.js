import React from 'react';
import classes from './keyboard.module.css';
import $ from 'jquery';
import Settings from './settings'


class Keyboard extends React.Component{

    constructor(props){
        super(props);

        this.handleKeyPress=this.handleKeyPress.bind(this);
        this.myFunc=this.myFunc.bind(this);
        this.soun=this.soun.bind(this);
    }


    componentDidMount() {
        document.addEventListener("keypress", this.handleKeyPress);
      }
      componentWillUnmount() {
        document.removeEventListener('keypress', this.handleKeyPress);
      }
      handleKeyPress = e => {
        if(this.state.visibility==true){

          const pressedKey = e.code.substring(3);
          const sound = document.getElementById(pressedKey);
          sound.volume=this.state.sliderVal;
          sound.play();
          sound.currentTime = 0;
          this.setState({ ...this.state, soundText: pressedKey });
        }else{
          return 0;
        }
      };
    
      state = { soundText: "",
    visibility:true,
  display:'Volume: 100',
sliderVal:1 };
    
      handlePadClick = e => {
        e.preventDefault();
        const childChar = e.target.innerHTML.charAt(0);
        const sound = document.getElementById(childChar);
        sound.volume=this.state.sliderVal;
        sound.play();
        sound.currentTime = 0;
        this.setState({ ...this.state, soundText: childChar });
      };


       myFunc() {
        this.setState(state =>{
          if(state.visibility==true){
          return {visibility:false}
          }else{
            return {visibility:true}
          }
        })
     }
      

     soun(e) {
      if (this.state.visibility) {
        this.setState({
          sliderVal: e.target.value,
          display: "Volume: " + Math.round(e.target.value * 100)
        });
      }
    }


      render() {
        
        if(this.state.visibility){
        return (
          <div className="container">
            <u>
              <h1>freecodecamp- Drum Machine</h1>
            </u>
            <div id="drum-machine" className={classes.drumMachine}>


                <div className="row">
                    <div className="col-lg" id="tbd"  >


                    <div className="row " >

                      <div
                      style={styles}
                        onClick={this.handlePadClick}
                        id="wrp-Q"
                        className="drum-pad"
                      >
                        Q
                        <audio
                          id="Q"
                          src="a.mp3"
                          className="clip"
                        />
                      </div>
                      <div
                      style={styles}
                        onClick={this.handlePadClick}
                        id="wrp-W"
                        className="drum-pad"
                      >
                        W
                        <audio
                          id="W"
                          src="b.mp3"
                          className="clip"
                        />
                      </div>
                      <div
                      style={styles}
                        onClick={this.handlePadClick}
                        id="wrp-E"
                        className="drum-pad"
                      >  
                      E
                        <audio
                          id="E"
                          src="c.mp3"
                          className="clip"
                        />
                  </div>


                  </div>



                  <div className="row" >



                      <div
                      style={styles}
                        onClick={this.handlePadClick}
                        id="wrp-A"
                        className="drum-pad"
                      >
                        A
                        <audio
                          id="A"
                          src="d.mp3"
                          className="clip"
                        />
                      </div>
                      <div
                      style={styles}
                        onClick={this.handlePadClick}
                        id="wrp-S"
                        className="drum-pad"
                      >
                        S
                        <audio
                          id="S"
                          src="e.mp3"
                          className="clip"
                        />
                      </div>
                      <div
                      style={styles}
                        onClick={this.handlePadClick}
                        id="wrp-D"
                        className="drum-pad"
                      >
                        D
                        <audio
                          id="D"
                          src="f.mp3"
                          className="clip"
                        />
                  </div>





                  </div>







                  <div className="row">
                      <div
                      style={styles}
                        onClick={this.handlePadClick}
                        id="wrp-Z"
                        className="drum-pad"
                      >
                        Z
                        <audio
                          id="Z"
                          src="g.mp3"
                          className="clip"
                        />
                      </div>
                      <div
                      style={styles}
                        onClick={this.handlePadClick}
                        id="wrp-X"
                        className="drum-pad"
                      >
                        X
                        <audio
                          id="X"
                          src="h.mp3"
                          className="clip"
                        />
                      </div>
                      <div
                      style={styles}
                        onClick={this.handlePadClick}
                        id="wrp-C"
                        className="drum-pad"
                      >
                        C
                        <audio
                          id="C"
                          src="i.mp3"
                          className="clip"
                        />
                  </div>

                  </div>

                  </div>
                

                <div id="display" className="col-sm"  style={{width:'50%',margin:'0 auto',textAlign:'center',marginTop:'30px'}}>
                  
                  <button id="btn1" className="btn btn-secondary" onClick={this.myFunc}>Toggle Off</button>
                  <h2>Power is: On</h2>
                  <div style={{border:'2px solid black',width:'50%',margin:'0 auto',backgroundColor:'#001011',textAlign:'center'}}>Key Pressed: {this.state.soundText}</div>
                    <hr></hr>
                  <input type="range" id="vol" step="0.01" name="vol" min="0" max="1" value={this.state.sliderVal}  onChange={this.soun}></input>
                  <div style={{border:'2px solid black',width:'50%',margin:'0 auto',backgroundColor:'#001011',textAlign:'center'}}>{this.state.display}</div>
              </div>

              </div>


                </div>
                </div>
        );}
        else{
          return(
            <div className="container">
            <u>
              <h1>freecodecamp- Drum Machine</h1>
            </u>
            <div id="drum-machine" className={classes.drumMachine}>


                <div className="row">
                    <div className="col-lg" id="tbd" >


                    <div className="row " >

                      <div
                      style={styles}
                        
                        id="wrp-Q"
                        className="drum-pad"
                      >
                        
                        
                      </div>
                      <div
                      style={styles}
                        
                        id="wrp-W"
                        className="drum-pad"
                      >
                        
                        <audio
                          id="W"
                          src="b.mp3"
                          className="clip"
                        />
                      </div>
                      <div
                      style={styles}
                        
                        id="wrp-E"
                        className="drum-pad"
                      >  
                      
                        <audio
                          id="E"
                          src="c.mp3"
                          className="clip"
                        />
                  </div>


                  </div>



                  <div className="row" >



                      <div
                      style={styles}
                       
                        id="wrp-A"
                        className="drum-pad"
                      >
                        
                        <audio
                          id="A"
                          src="d.mp3"
                          className="clip"
                        />
                      </div>
                      <div
                      style={styles}
                        
                        id="wrp-S"
                        className="drum-pad"
                      >
                        
                        <audio
                          id="S"
                          src="e.mp3"
                          className="clip"
                        />
                      </div>
                      <div
                      style={styles}
                        
                        id="wrp-D"
                        className="drum-pad"
                      >
                        
                        <audio
                          id="D"
                          src="f.mp3"
                          className="clip"
                        />
                  </div>





                  </div>







                  <div className="row">
                      <div
                      style={styles}
                        
                        id="wrp-Z"
                        className="drum-pad"
                      >
                        
                        <audio
                          id="Z"
                          src="g.mp3"
                          className="clip"
                        />
                      </div>
                      <div
                      style={styles}
                       
                        id="wrp-X"
                        className="drum-pad"
                      >
                       
                        <audio
                          id="X"
                          src="h.mp3"
                          className="clip"
                        />
                      </div>
                      <div
                      style={styles}
                        
                        id="wrp-C"
                        className="drum-pad"
                      >
                        
                        <audio
                          id="C"
                          src="i.mp3"
                          className="clip"
                        />
                  </div>

                  </div>



                  </div>
                

                <div id="display" className="col-sm" style={{width:'50%',margin:'0 auto',textAlign:'center',marginTop:'30px'}}>
                  
                  <button id="btn1" className="btn btn-secondary" onClick={this.myFunc}>Toggle On</button>
                  <h2>Power is: Off</h2>
              </div>

              </div>


                </div>
                </div>
        );
        }
      }
    }
    

const mystyle={
  color:'red',
  backgroundColor:'black'
}

const styles={
    backgroundColor:'#001011',
    margin:'10px',
    height:'100px',
    width:'100px',
    textAlign:'center',
    position:'center',
    padding: '40px 0',
    boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',

}

export default Keyboard;