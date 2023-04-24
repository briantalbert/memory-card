import React, { useState } from "react"

export default function Card(props) {

    function handleClick() {
        if(props.win) {
            props.setScore(0);
            props.setWin(false);
        }

        if (props.clicked.indexOf(props.text) == -1) {
            props.setClicked(prevList => 
                [...prevList,
                props.text]
            );
            props.setScore(props.score + 1);
            if (props.score == 10) {
                props.setWin(true)
            }
        } else {
            props.setClicked([]);
            if (props.score > props.maxScore) {
                props.setMaxScore(props.score);
            }
            props.setScore(0);
        }

        
    }

    return (
        <div className="card" onClick={handleClick}>
            <img 
                src={`../src/assets/${props.text}.png`}
            />
        </div>
    )
}