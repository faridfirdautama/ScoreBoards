import React from 'react';

// function Board(props) {
//    const [team, setTeam] = useState(props.team);
//    const [score, setScore] = useState(0);
  
//    const increaseScore = () => setScore(score + 1);
//    const decreaseScore = () => score > 0 && setScore(score - 1);
//    const reset = () => setScore(0);
   
//    return (
//      <div className="boards">
//        <h2>{team}</h2>
//        <h1>{score}</h1>
//        <button className="btn" onClick={increaseScore} >+</button>
//        <button className="btn" onClick={decreaseScore} >-</button>
//        {score === 21 && <h2 className="result" >Winner!</h2>}
//        {props.score}
//      </div>
//    )
//  }

function Board({team, score, onInc, onDec}) {
   return(
      <div className="boards">
         <h2>{team}</h2>
         <h1>{score}</h1>
         <button className="btn" onClick={() => onInc(team.id)} >+</button>
         <button className="btn" onClick={() => onDec(team.id)} >-</button>
         {score === 21 && <h2 className="result" >Winner!</h2>}
      </div>
   )
}


export default Board;
 
 