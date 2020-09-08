import React from 'react'
import {Redirect} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import {useGame} from '../utils/useGame';

const Home = () => {
    const {gameStarted, startGame} = useGame()

    const handleStart = (params) => {
        startGame()
    }
    
    if (gameStarted === true) {return <Redirect push to='/game' />}
    return (
        <>
            <h1>Welcome to FlashQuiz</h1>
            <p>A place where you can gauge your general knowledge</p>
            <Button onClick={handleStart}>Start Game</Button>
        </>
    )
}

export default Home
