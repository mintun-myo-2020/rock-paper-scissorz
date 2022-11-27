import React, { useState, useEffect } from 'react'

import scissor from '../assets/scissor.jpg';
import paper from '../assets/paper.jpg';
import rock from '../assets/rock.jpg';

import "./Player.css"

const options = [scissor, paper, rock]

const Computer = (props) => {

    const [selection, setSelection] = useState(options[props.selection]);
    
    useEffect(() => {
      
        console.log(props.selection)
        setSelection(options[props.selection])
    
    }, [props.selection])
    

    return (
        <div className='card'>

            <img className='selection' src={selection} alt="test" />

        </div>
    )
}

export default Computer