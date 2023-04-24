import React, { useEffect, useState } from "react"
import Card from "./Card"

export default function Game(props) {

    const [animals, setAnimals] = useState(['DOG', 'CAT', 'TURTLE', 'HORSE', 'SASQUATCH', 'BIRD', 'DUCK', 'SLOTH', 'GORILLA', 'BURGER']);
    const [clicked, setClicked] = useState([]);
    const score = props.score;
    const setScore = props.setScore;

    let animalElements = animals.map(beast => 
        {return (<Card text={beast} 
                       score={score} 
                       setScore={setScore} 
                       clicked={clicked} 
                       setClicked={setClicked}
                       maxScore={props.maxScore}
                       setMaxScore={props.setMaxScore}
                />)}
    );

    function shuffleList() {
        setAnimals(animals.sort(() => Math.random() - 0.5));
    };

    useEffect(() => {
        shuffleList();
    }, [score])

    return (
        <div className="game">
            <div className="game-board">{animalElements}</div>
        </div>
    )
}