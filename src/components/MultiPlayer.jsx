import React, { useState, useContext } from 'react'
import { SocketContext } from '../pages/Multi';


import scissor from '../assets/scissor.jpg';
import paper from '../assets/paper.jpg';
import rock from '../assets/rock.jpg';

import "./Player.css"

const options = [scissor, paper, rock];
const choices = ["SCISSOR", "PAPER", "ROCK"];


const Player = ({gameID}) => {

    const socket = useContext(SocketContext);
    const [selection, setSelection] = useState(0);


    return (
        <div className='card'>
            <h2 className="playerName">YOU</h2>
            <img className='selection' src={options[selection]} alt="test" />
            <h2>{choices[selection]}</h2>
            <div className='options'>               
                {options.map((option, i) => 
                    <div key={i} className='option' onClick={() => {
                        setSelection(i);
                        socket.emit("select-option", gameID ,i)
                        }}>
                        <img key={i} src={options[i]} alt={i}/>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Player