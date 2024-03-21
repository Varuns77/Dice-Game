import styled from 'styled-components';
import StartGame from './components/StartGame';
import { useState } from 'react';
import Game_Play from './components/Game_Play';

function App() {

  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !prev);
  }

  return (
    <>
      {isGameStarted ? <Game_Play/> : <StartGame toggle={toggleGamePlay}/> }
  
    </>
  )
}

export default App


