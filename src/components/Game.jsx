import React, { useEffect, useState } from "react"
import Card from "./Card"

export default function Game(props) {

    const [animals, setAnimals] = useState(['DOG', 'CAT', 'TURTLE', 'HORSE', 'SASQUATCH', 'BIRD', 'DUCK', 'SLOTH', 'GORILLA', 'BURGER']);
    const [count, setCount] = useState(0);

    let animalElements = animals.map(beast => 
        {return (<Card text={beast} shuffle={shuffleList} count={count} setCount={setCount} />)}
    );

    function shuffleList() {
        setAnimals(animals.sort(() => Math.random() - 0.5));
    };

    useEffect(() => {
        shuffleList();
    }, [count])

    return (
        <div className="game">
            <div className="game-board">{animalElements}</div>
        </div>
    )
}