import React from 'react';




class Settings extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input:''
        }
    }


    handleKeyPress(e) {

        switch(e.keyCode){
            case this.props.sounds[0].keyCode :
                this.setState({
                    input: 'Sound1'
                })
                break;

                case this.props.sounds[1].keyCode :
                this.playSound(this.props.sounds[1].url);
                break;

                case this.props.sounds[2].keyCode :
                this.playSound(this.props.sounds[2].url);
                break;

                case this.props.sounds[3].keyCode :
                this.playSound(this.props.sounds[3].url);
                break;

                case this.props.sounds[4].keyCode :
                this.playSound(this.props.sounds[4].url);
                break;

                case this.props.sounds[5].keyCode :
                this.playSound(this.props.sounds[5].url);
                break;

                case this.props.sounds[6].keyCode :
                this.playSound(this.props.sounds[6].url);
                break;

                case this.props.sounds[7].keyCode :
                this.playSound(this.props.sounds[7].url);
                break;

                case this.props.sounds[8].keyCode :
                this.playSound(this.props.sounds[8].url);
                break;
        }
        }

    render(){
        return (
            <div id="display" style={styles1}>

            <h1>{this.state.input}</h1>

            </div>
        )
    }
}

const styles1={
    backgroundColor:'red'
}


export default Settings;