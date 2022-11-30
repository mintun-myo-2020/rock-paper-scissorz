import React, {useContext, useState} from 'react'
import { io } from 'socket.io-client';
import { SocketContext } from '../pages/Multi';

import './Modal.css';


const JoinGame = ({openJoinGame, setOpenJoinGame, setGameID}) => {
    if (!openJoinGame) return null;

    const socket = useContext(SocketContext);

    const handleJoinGame = (event) => {
        event.preventDefault();

        let gameID = event.target[0].value;
        socket.emit('join-game', gameID);

        setGameID(gameID);
        setOpenJoinGame(false);

    }

    return (
        <div className='overlay'>
            <div className="modalContainer">
                <p>Enter Game Details:</p>
                <form onSubmit={handleJoinGame}>
                    {/* <input type="text" placeholder='Enter name' />
                    <br /> */}
                    <input type="text" placeholder='Enter game code' />
                    <br />
                    <input type="submit" className='submit' value='Join Game!'/>
                </form>
            </div>
        </div>
    )
}

export default JoinGame