import React, { Component } from 'react';

class CorrectionScreen extends Component {
    state = {  }
    render() { 
    return ( 
    <div>
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <h3>Correct letters:</h3>
                    <ul class="list-group">
                        {this.props.correctLetters.map((letter) => 
                            <li class="list-group-item">{letter}</li>
                        )}
                    </ul>
                </div>
                <div className="col-2">
                    <h3>Wrong letters:</h3>
                    <ul class="list-group">
                        {this.props.wrongLetters.map((letter) => 
                            <li class="list-group-item">{letter}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
    }
}
 
export default CorrectionScreen;