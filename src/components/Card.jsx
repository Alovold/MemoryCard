import { useEffect, useState } from "react";
import GamePrompt from "./Prompt";



export default function Card({changeScore}) {
  const [items, setItems] = useState([
    {id: 0, content: "A", displayed: false},
    {id: 1, content: "B", displayed: false},
    {id: 2, content: "C", displayed: false},
    {id: 3, content: "D", displayed: false},
    {id: 4, content: "E", displayed: false}]
  )
  const [start, setStart] = useState(false);
  const  [item, setItem] = useState("");
  const [currentCard, setCurrentCard] = useState("");
  

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
          }}>start</button>:
          <div>
          <p id="shownCard">{item.content}</p>
          <GamePrompt updateScore={changeScore} displayedCard={currentCard} shuffler={shuffleHandler} update={updateItems} item={item}/>
          </div>
        }
        </div>
    );
}


    // useEffect(() => {
    //     handleScore();
    // }, [])