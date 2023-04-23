import React, { useState } from "react"

export default function Header(props) {
    const {score, maxScore} = props;
    
    return (
        <div className="header">
            <h1>Memory Game</h1>
            <div className="scoreboard">
                <ul>
                    <li>{`Score: ${score}`}</li>
                    <li>{`High score: ${maxScore}`}</li>
                </ul>
            </div>
        </div>
    )
}