import './App.css';
import Card from './components/Card';
import PageHeader from './components/Header';
import { useState, useEffect } from 'react';


function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [finalScore, setFinalScore] = useState(0)
  const [finalMessageVisible, setFinalMessageVisible] = useState("finalScore-hidden")
  const updateScore = (answer)=>{
    if(answer){
      setScore(score+1)
    }
    else {
      setScore(score-1)
    }
  }

  const endGame = ()=>{
    if (score > bestScore){
      setBestScore(score);
    }
    setFinalScore(score)
    setScore(0)
    setFinalMessageVisible("finalScore")
  }

  const resetFinalMessage = ()=>{
    setFinalMessageVisible("finalScore-hidden")
  }

  return (
    <div className="App">
      <header className="App-header">
        <PageHeader score={score} bestScore={bestScore}/>
      </header>
      <div className="pageBody">
        <div id="cardDiv">
          <div className={finalMessageVisible}>
            <p>Congratulations! Your final score is {finalScore}</p>
          </div>
        <Card changeScore={updateScore} endGame={endGame} resetFinalMessage={resetFinalMessage}/>
        </div>
      </div>
    </div>
  );
}

export default App;