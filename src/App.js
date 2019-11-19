import React from 'react';
import StartPage from './components/startPage'
import CorrectionScreen from './components/correctionScreen'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  var letters = ['a','b','c', 't'];
  return (
    <CorrectionScreen wrongLetters={letters} correctLetters={letters}></CorrectionScreen>
  );
}

export default App;
