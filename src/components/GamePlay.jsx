import { Button, OutLine } from "../styled/Buttons";
import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore"
import { useState } from "react";
import styled from "styled-components";
import Rules from "./Rules";
const GamePlay = () => {

  const [score,setScore] = useState(0);
  const [selectedNumber,setSelectedNumber] = useState();
  const [currDice,setCurrDice] = useState(1);
  const [error,setError] = useState();
  const [showRules,setShowRules] = useState(false);


  const generateRandomNumber = (min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
}

const roleDice = () =>{

  if(!selectedNumber)
    {
      setError("You have not selected any number");
      return;

    }
    setError("");
    const randomNumber = generateRandomNumber(1,7);
    setCurrDice((prev) => randomNumber)
    
    if(selectedNumber==randomNumber){
      setScore((prev)=>prev+randomNumber);
    }
      else{
        setScore((prev)=>prev-2);
    }

    setSelectedNumber(undefined);
}

const reset = ()=>{
  setScore(0);
}





return (
    <MainContainer>
    <div className="top_section">
   <TotalScore score={score}/>
   <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
   </div>
   <RoleDice currDice={currDice} roleDice={roleDice}/>
   <div className="btns">
    <OutLine onClick={reset}>Reset</OutLine>
    <Button onClick={()=>setShowRules((prev)=>!prev)}>
      {showRules ? "Hide Rules": "Show Rules"}
      </Button>
   </div>
   {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
padding-top:70px;
  .top_section{
    display:flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    margin-top: 40px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:10px;
  }
`;