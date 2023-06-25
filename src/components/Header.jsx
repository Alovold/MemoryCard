import { useState, useEffect } from "react"


export default function PageHeader({score, bestScore}) {

    
    return (
        <>
            <div className="headerDiv">
                <h1 id="title">Test Your Memory!</h1>
                <div className="scoresDiv">
                    <p>Current Score: {score}</p>
                    <p>Best Score: {bestScore}</p>
                </div>
            </div>
        </>
    )
}