import styled from "styled-components"
  

const RoleDice = ({currDice,roleDice}) => {

  return (
    <DiceContainer>
    <div className="dice"
     onClick={roleDice}>
        <img src={`/images/dice_${currDice}.png`} alt="sdv" />
    </div>
    <p>Click on dice to roll</p>
     </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top: 48px;

.dice{
cursor:pointer;
}
   
   p{
    font-size: 24px;
   }
`