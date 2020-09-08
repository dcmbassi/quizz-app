import React from 'react'
import Button from 'react-bootstrap/Button'
import {Redirect} from 'react-router-dom'
import {useGame} from '../utils/useGame'

const FinalScore = ({props}) => {
    const {gameStarted, score, endGame} = useGame()


    const handleReturnHome = () => {
        endGame()
    }

    if (gameStarted === false) {return <Redirect to="/" />}
    return (
        <>
            <div>
                <h3>Your final score is {score}</h3>
            </div>
            <Button onClick={handleReturnHome}>Return to Home</Button>
            
        </>
    )
}

export default FinalScore
