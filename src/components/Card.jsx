import { useEffect, useState } from "react";
import GamePrompt from "./Prompt";



export default function Card({changeScore, endGame, resetFinalMessage}) {
  const [items, setItems] = useState([
    {id: 0, content: "https://product-images.tcgplayer.com/264248.jpg", displayed: false},
    {id: 1, content: "https://product-images.tcgplayer.com/fit-in/437x437/208038.jpg", displayed: false},
    {id: 2, content: "https://product-images.tcgplayer.com/fit-in/437x437/208036.jpg", displayed: false},
    {id: 3, content: "https://product-images.tcgplayer.com/fit-in/437x437/475428.jpg", displayed: false},
    {id: 4, content: "https://product-images.tcgplayer.com/fit-in/437x437/475425.jpg", displayed: false},
    {id: 5, content: "https://product-images.tcgplayer.com/fit-in/437x437/264251.jpg", displayed: false},
    {id: 6, content: "https://product-images.tcgplayer.com/fit-in/437x437/209565.jpg", displayed: false},
    {id: 7, content: "https://product-images.tcgplayer.com/fit-in/437x437/208032.jpg", displayed: false},
    {id: 8, content: "https://product-images.tcgplayer.com/fit-in/437x437/208031.jpg", displayed: false}]
  )
  const [start, setStart] = useState(false);
  const  [item, setItem] = useState("");
  const [currentCard, setCurrentCard] = useState("");
  const [turn, setTurn] = useState(0);
  
  const updateTurn = ()=>{
    setTurn(turn+1);
    if (turn == 10){
      setStart(false);
      let tempArr = items.map((item)=>{
          item.displayed = false;
      })
      setItems(tempArr);
      setTurn(0);
      endGame();
    }
  }

    const updateItems = (id)=>{

      let tempArr = items.map((item)=>{
        if (item.id == id){
          item.displayed = true;
        }
      })
      setItems(tempArr)
    }
    const shuffleArray = (array) => {
      console.log(array);
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

  const shuffleHandler = ()=>{

  let arr = items;
  let shuffledItems = shuffleArray(arr);
  setItems(shuffledItems)
  //console.log(shuffledItems);
  let currentID;
  if (items[0].displayed == false){
    console.log("Not seen yet")
    
    currentID = items[0].id;
    //updateItems(currentID);
  }

  setItem(items[0]);
  setCurrentCard(items[0].displayed)
}
//console.log(shuffledItems);
  // useEffect(() => {
  //     shuffleHandler();
  // }, [])

    return (
        <div className="content">
          {!start?
          <button onClick={()=>{
            shuffleHandler()
            setStart(true)
            resetFinalMessage()
          }}>start</button>:
          <div>
          <img src={item.content} className="cardImg"></img>
          <GamePrompt updateScore={changeScore} displayedCard={currentCard} shuffler={shuffleHandler} update={updateItems} item={item} updateTurn={updateTurn}/>
          </div>
        }
        </div>
    );
}


    // useEffect(() => {
    //     handleScore();
    // }, [])