import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='menu'>
            <Link to="/single">
                <div className='gameType'>
                    <h1>Play Single Player</h1>
                </div>
            </Link>
            <Link to="/multi">
                <div className='gameType'>
                    <h1>Play Multi Player</h1>
                </div>
            </Link>
        </div>
    )
}

export default Home