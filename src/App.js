import React, { useState } from "react"
import './App.css'

import {Boards} from "./components/Boards";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const handleBoxClick = (boxIdx) => {

  }
  
  return (
    <div className='App'>
      <Boards board={board} onClick={null}/>
    </div>
  );
}

export default App;
