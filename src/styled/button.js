import styled from 'styled-components'
 
export const Button = styled.button`
    color: white;
    padding: 10px;
    background-color: black;
    border-radius:5px;
    min-width: 220px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        
    }
`

// If we pass button as a reference in a function, saari properties reference ki aajaengi
export const OutlineButton = styled(Button)`
    color: black;
    background-color: white;    
    border: 1px solid black;

    &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
    }
`