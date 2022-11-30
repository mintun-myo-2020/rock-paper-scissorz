import React, { useEffect, useState } from 'react'
import CreateGameModal from '../components/CreateGameModal';
import JoinGameModal from '../components/JoinGameModal';
import MultiPlayer from '../components/MultiPlayer'
import PlayerTwo from '../components/PlayerTwo'
import { io } from 'socket.io-client';

import './Game.css'

const WS = 'http://18.142.142.156:8080';
export const SocketContext = React.createContext();
export const socket = io.connect(WS);

const Multi = () => {

    const [openCreateGame, setOpenCreateGame] = useState(false)
    const [openJoinGame, setOpenJoinGame] = useState(false)
    const [gameID, setGameID] = useState();

    const handleLeaveGame = e => {
        e.preventDefault();

        socket.emit("leave-game", gameID);
        setGameID(null);
    }

    return (
        <SocketContext.Provider value={socket}>
            <div className='create-join' onClick={() => {
                if (openCreateGame || openJoinGame) {
                    setOpenJoinGame(false);
                    setOpenCreateGame(false);
                }

            }}>
                <button className='btn' onClick={() => {
                    setOpenCreateGame(!openCreateGame);
                    setOpenJoinGame(false);
                }}>CREATE NEW GAME</button>
                <button className='btn' onClick={() => {
                    setOpenJoinGame(!openJoinGame);
                    setOpenCreateGame(false);
                }}>JOIN GAME</button>
            </div>
            {gameID ? (
                <p className='connected' onClick={() => {
                    setOpenJoinGame(false);
                    setOpenCreateGame(false);
                }}>Connected to {gameID}</p>
            ) : (
                <p></p>
            )}
            <CreateGameModal setGameID={setGameID} setOpenCreateGame={setOpenCreateGame} openCreateGame={openCreateGame} />
            <JoinGameModal setGameID={setGameID} setOpenJoinGame={setOpenJoinGame} openJoinGame={openJoinGame} />
            <div className='game'>
                <MultiPlayer gameID={gameID} />
                <PlayerTwo gameID={gameID} />
            </div>
            <button className="btn leave" onClick={handleLeaveGame}>
                LEAVE GAME
            </button>
        </SocketContext.Provider>
    )
}

export default Multi