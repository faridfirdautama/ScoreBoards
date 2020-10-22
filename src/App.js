import React from 'react';
import './App.css';
import Reset from './Components/Reset';
import Board from "./Components/Boards";

function App(props) {

  const teams = ["Team Utara", "Team Selatan"];
 
  return (
    <div className="App">
        <Reset />

        {teams.map((eachTeam, index) => {
          return (
            <Board 
            key={index} 
            id={index} 
            team={eachTeam}
            />
          );
        })}
    </div>
  );
}

export default App;