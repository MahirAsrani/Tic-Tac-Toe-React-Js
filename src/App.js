import React from 'react';
import './App.css';
import { Board } from './components/Board';
function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;

//SQUARE
//-- value & onclick function

//BOARD
// states
// --boardstate array(9) squares set null
// --turnstate X or O
// handleclick
// --copy boardstate
// --if index is filled return
// --put X or O
// --calculate next turn
// --set state of board
// --set state of turn

//CALCULATE THE WINNER
