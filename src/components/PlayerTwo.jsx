import React, { useState, useContext, useEffect } from 'react'
import { SocketContext } from '../pages/Multi';

import scissor from '../assets/scissor.jpg';
import paper from '../assets/paper.jpg';
import rock from '../assets/rock.jpg';

import "./Player.css"

const options = [scissor, paper, rock];
const choices = ["SCISSOR", "PAPER", "ROCK"];


const PlayerTwo = (props) => {

    const [selection, setSelection] = useState(0);
    const socket = useContext(SocketContext);
    
    socket.on("receive", (i) => {
        setSelection(i);
        console.log("receiving " + i);
    }); 

    return (
        <div className='card'>
            <h2 className="playerName">OPPONENT</h2>
            <img className='selection' src={options[selection]} alt="test" />
            <h2>{choices[selection]}</h2>
        </div>
    )
}

export default PlayerTwo