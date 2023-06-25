import { useState, useEffect } from "react";


export default function GamePrompt({updateScore, displayedCard, shuffler, update, item, updateTurn}) {

    const handleAnswer = (answer)=>{
        updateScore(answer)
        update(item.id)
        updateTurn()
        shuffler()
    }

    return (
        <div>
        <p>Have you seen this item yet?</p>
        <button className="button" onClick={()=>{handleAnswer(displayedCard)}}>Yes</button>
        <button className="button" onClick={()=>{handleAnswer(!displayedCard)}}>No</button>
        </div>
    )
}

