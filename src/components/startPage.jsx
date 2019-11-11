import React, { Component } from 'react';
import io from 'socket.io-client';

class StartPage extends Component {
    
    state = { 
        socket: null
    }
    
    joinNodeServer = () =>{
        var socketUrl = "http://localhost:3001";
        this.setState({
            socket: io(socketUrl)
        })
    }
    
    joinRoom = () =>{
        this.state.socket.on("oof", function(socket){
            console.log("its joined a rooms" + socket)
        });
        this.state.socket.emit("join room", "test");
    }

    checkIfConnected = () =>{
        if(this.state.socket != null){
            return( <React.Fragment><button>Create a Room</button> <button onClick={this.joinRoom}>Join a Room</button></React.Fragment> );
        }
        else{
            return( <button onClick={this.joinNodeServer}>Start</button> );
        }
    }

    render() { 
        return ( <div>{this.checkIfConnected()}</div> );
    }
}
 
export default StartPage;