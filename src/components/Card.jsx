import React, { useState } from "react"

export default function Card(props) {
    
    function handleClick() {
        props.setCount(props.count + 1);
    }

    return (
        <div className="card" onClick={handleClick}>
            <span>{props.text}</span>
        </div>
    )
}