import React, { useState, useContext } from 'react'
import { io } from "socket.io-client";
import { SocketContext } from '../pages/Multi';

import './Modal.css';

const CreateGame = ({ openCreateGame, setOpenCreateGame, setGameID }) => {
    if (!openCreateGame) return null;

    const socket = useContext(SocketContext);

    const handleCreateGame = e => {
        e.preventDefault();
    
        socket.on("connect", () => {
            console.log(`You connected with ${socket.id}`)
        })

        let gameID = e.target[0].value;
        socket.emit("create-game", gameID);

        setGameID(gameID);
        setOpenCreateGame(false); 
    }

    return (
        <div className='overlay'>
            <div className="modalContainer">
                <p>Create Game:</p>
                <form onSubmit={handleCreateGame}>
                    {/* <input type="text" placeholder='Enter name' />
                    <br /> */}
                    <input type="text" placeholder='Enter game code' />
                    <br />
                    <input type="submit" className='submit' value='Create Game!' />
                </form>
            </div>
        </div>
    )
}

export default CreateGame