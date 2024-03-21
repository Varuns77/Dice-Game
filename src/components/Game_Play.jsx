import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styled/button'
import Rules from './Rules'

function Game_Play() {
  const [score,setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const[currentDice, setCurrentDice] = useState(1);
  const [showRules, setshowRules] = useState(false);

  const generateRandomNumber = (min, max)=> {
    return Math.floor(Math.random() * (max - min) + min);
}

const roleDice = () => {
  
    //IF THE NUMBER IS NOT SELECTED
    if(!selectedNumber) return;
    const randomNumber = generateRandomNumber(1,7);
    console.log(randomNumber);
    setCurrentDice((prev) => randomNumber)

    if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber)
    }
    else{
      setScore((prev) => prev - 2)
    }

    setSelectedNumber(undefined);
}

  const resetScore = () => {
    setScore(0)
  }

  return (
    <MainContainer> 
        <div className="top_section">
            <TotalScore score={score}/> 
            <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
        </div>
            <RollDice currentDice={currentDice} roleDice={roleDice}/>
            <div className='btns'>
              <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
              <Button onClick={() => setshowRules(prev => !prev)}>{ showRules ? "Hide " : "Show "}Rules</Button>
            </div>
            {showRules && <Rules/>}
    </MainContainer>
  )
}

export default Game_Play

const MainContainer = styled.main`

    padding: 70px;

    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

`