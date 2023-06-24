import './App.css';
import Card from './components/Card';
import PageHeader from './components/Header';
import { useState, useEffect } from 'react';


function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const updateScore = (answer)=>{
    if(answer){
      setScore(score+1)
    }
    else {
      setScore(score-1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <PageHeader score={score}/>
      </header>
      <div className="pageBody">
        <div id="cardDiv">
        <Card changeScore={updateScore}/>
        </div>
      </div>
    </div>
  );
}

export default App;