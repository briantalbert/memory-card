import { useState } from 'react'
import Header from './components/Header'
import Game from './components/Game'

import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  return (
    <div>
      <Header score={score} maxScore={maxScore} />
      <Game score={score} maxScore={maxScore} setScore={setScore} setMaxScore={setMaxScore} />
    </div>
  )
}

export default App
