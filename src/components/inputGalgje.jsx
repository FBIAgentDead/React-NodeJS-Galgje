import React, { Component } from 'react';
import io from 'socket.io-client';

class InputGalgje extends Component {
    state = { 
        letter: "",
        socket: io(this.props.host)
    }

    sendLetter = () =>{
        if(this.state.letter.length > 1){
            this.state.socket.emit("send word", (this.state.letter))
            this.setState({
                letter: ""
            });
        }
        if(this.state.letter.length < 1){
            console.log("Retard")
        }
        if(this.state.letter.length === 1){
            this.state.socket.emit("send letter", (this.state.letter))
            this.setState({
                letter: ""
            });
        }
    }

    handleChange(event) {
        this.setState({letter: event.target.value})
    }

    render() { 
        return ( 
            <div style={{position: "fixed", bottom: "0px"}} className="container pt-4">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Letter/Word" aria-label="Recipient's username" value={this.state.letter} onChange={this.handleChange.bind(this)} aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                        <button onClick={this.sendLetter} className="btn btn-outline-secondary" type="button" id="button-addon2">Send Letter/Word</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default InputGalgje;