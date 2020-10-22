import React, {useState} from 'react';
import './App.css';
import Reset from './Components/Reset';
import Board from "./Components/Boards";
import Footer from './Components/Footer';

const initialState = [
  {id: 1, name: "Team Utara", score: 0},
  {id: 2, name: "Team Selatan", score: 0}
];

function App() {

  const [teams, setTeams] = useState(initialState);

  // Tambah score
  const increaseScore = (idx) => {
    const newData = teams.map((item, index) => {
      if (idx !== index) return item;
      return {...item, score: item.score + 1};
    });
    setTeams(newData)
  };  

  // Kurang score
  const decreaseScore = (idx) => {
    const newData = teams.map((item, index) => {
      if (idx !== index) return item;
      return {...item, score: item.score > 0 ? item.score - 1 : item.score};
    });
    setTeams(newData)
  };


 
  return (
    <div className="App">
        <Reset onReset={() => setTeams(initialState)} />

        {teams.map((team, index) => {
          return (
            <Board 
            key={index} 
            id={index} 
            team={team.name}
            score={team.score}
            onInc={() => increaseScore(index)}
            onDec={() => decreaseScore(index)}
            />
          );
        })}

        <Footer />
    </div>
  );
}

export default App;