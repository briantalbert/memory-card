import React, { useEffect, useState } from "react"
import Card from "./Card"

export default function Game(props) {
    
    const [animals, setAnimals] = useState(['bird', 'dog', 'duck', 'elephant', 'kangaroo', 'mouse', 'pig', 'snail', 'horse', 'turtle'].sort(() => Math.random() - 0.5));
    const [clicked, setClicked] = useState([]);
    const [win, setWin] = useState(false);
    
    const score = props.score;
    const setScore = props.setScore;

    if (props.score == 10) {
        props.setWin(true)
    }

    let animalElements = animals.map(beast => 
        {return (<Card text={beast} 
                       score={score} 
                       setScore={setScore} 
                       clicked={clicked} 
                       setClicked={setClicked}
                       maxScore={props.maxScore}
                       setMaxScore={props.setMaxScore}
                       win={win}
                       setWin={setWin}
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
            {win ? <div className="win">YOU WIN!</div> : <div className="game-board">{animalElements}</div>}
        </div>
    )
}