import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/button'

function StartGame({toggle}) {

  return (
    <Container>
        <div>
        <img src="/images/dices.png" alt="Dices pic" />
        </div>
        <div className='content'>
            <h1>Dice Game</h1>        
            <div className="playbtn">
                <Button onClick={toggle}>Play Now</Button>            
            </div>  
        </div>
        
    </Container>
  )
}

export default StartGame

const Container = styled.div`
max-width: 1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;

.content h1 {
    font-size: 96px;
    white-space: nowrap;
}

.playbtn {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
`
 
  