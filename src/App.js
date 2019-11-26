import React from 'react';
import CorrectionScreen from './components/correctionScreen'
import InputGalgje from './components/inputGalgje'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "../src/components/test.js";


function App() {
  var letters = ['a','b','c','t','t','t','t','t','t','t','t','t','t','t','t','t','t','t','t','t','t','t','t','t','t','t','t'];
  var hosting = "http://localhost:3001"
  return (
    <React.Fragment>
    <CorrectionScreen wrongLetters={letters} correctLetters={letters}></CorrectionScreen>
    <InputGalgje host={hosting}></InputGalgje>
    </React.Fragment>
  );
}

export default App;
