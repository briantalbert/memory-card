import React, { useState } from "react"

export default function Card(props) {

    function handleClick() {
        if (props.clicked.indexOf(props.text) == -1) {
            props.setClicked(prevList => 
                [...prevList,
                props.text]
            );
            props.setScore(props.score + 1);
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
            <span>{props.text}</span>
        </div>
    )
}