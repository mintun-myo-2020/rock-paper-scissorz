import Player from '../components/Player'
import Computer from '../components/Computer'
import { useState, useEffect } from 'react'

import './Game.css'

function Single() {

  const [userOption, setUserOption] = useState()
  const [comOption, setComOption] = useState(0)
  const [winner, setWinner] = useState("Pick a card!")
  const [streak, setStreak] = useState(0)

  function findWinner(user, computer) {
    if (user == computer) {
      setWinner("DRAW!")
    } else if ((user == 0 && computer == 1) || 
    (user == 1 && computer == 2) || 
    (user == 2 && computer == 0)) {
      setWinner("WIN!")
      setStreak(oldStreak => oldStreak + 1);
    } else if ((user == 1 && computer == 0) || 
    (user == 2 && computer == 1) || 
    (user == 0 && computer == 2)) {
      setWinner("LOSE!")
      setStreak(0);
    }
  }

  useEffect(() => {
    console.log(userOption, comOption)
    findWinner(userOption, comOption)
  }, [comOption, userOption])
  

  const getData = (data) => {
    setUserOption(data);
    let computerSelection = Math.floor(Math.random() * 3);
    setComOption(computerSelection);
  }
  


  return (
    <div className="App">
      <h1 className='title'>
        Welcome to Scissorz-paperZ-sTONE
      </h1>
      <div className='game'>
        <Player onSelect={getData} />
        <Computer selection={comOption} />
      </div>
      <div className="winner">
        <h1 className='title'>
          {winner} {streak} wins in a row
        </h1>
      </div>

    </div>
  )
}

export default Single
