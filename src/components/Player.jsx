import React, { useState } from 'react'

import scissor from '../assets/scissor.jpg';
import paper from '../assets/paper.jpg';
import rock from '../assets/rock.jpg';

import "./Player.css"

const options = [scissor, paper, rock];
const choices = ["SCISSOR", "PAPER", "ROCK"];


const Player = (props) => {

    const [selection, setSelection] = useState(0);

    return (
        <div className='card'>
            <img className='selection' src={options[selection]} alt="test" />
            <h2>{choices[selection]}</h2>
            <div className='options'>               
                {options.map((option, i) => 
                    <div key={i} className='option' onClick={() => {
                        setSelection(i);
                        props.onSelect(i);
                        }}>
                        <img key={i} src={options[i]} alt={i}/>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Player