import React from 'react';
import StartPage from './components/startPage'
import CorrectionScreen from './components/correctionScreen'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "../src/components/test.js";


function App() {
  var letters = ['a','b','c', 't'];
  return (
    <CorrectionScreen wrongLetters={letters} correctLetters={letters}></CorrectionScreen>
  );
}

export default App;
