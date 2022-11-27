import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Single from './pages/Single'
import Multi from './pages/Multi'
import Home from './pages/Home'


const App = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />}/> 
                    <Route path='/rockpaperscissorz' element={<Home />}/> 
                    <Route path='/single' element={<Single />}/> 
                    <Route path='/multi' element={<Multi />}/> 
                </Routes>
            </div>

        </>
    )
}

export default App