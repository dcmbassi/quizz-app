import React from 'react'
import {Redirect} from 'react-router-dom'
import {useGame} from '../utils/useGame'
import Button from 'react-bootstrap/Button'
import Score from './Score'
import Question from './Question'

const Game = () => {
    const {questions, gameStarted, removeAnsweredQuestion, skipQuestion, incrementScore}= useGame()
    const firstQ = questions[0]
    let submittedAnswer

    const handleOptionChange = (e) => submittedAnswer = e.target.value
    
    const handleAnswer = () => {
        if (submittedAnswer && submittedAnswer === firstQ.answer) {
            incrementScore()
            removeAnsweredQuestion()
        }
        if (submittedAnswer && submittedAnswer !== firstQ.answer) removeAnsweredQuestion()
        if (!submittedAnswer) removeAnsweredQuestion()
    }

    const handleSkip = () => {
        skipQuestion()
    }

    if (gameStarted === false) {return <Redirect to="/" />}
    if (gameStarted === true && questions.length < 1) {return <Redirect push to="/final-score" />}
    return (
        <>
            <div>
                <Score/>
            </div>
            {firstQ && <Question query={firstQ} handleOptionChange={handleOptionChange} />}
            <div className="game-controls" style={{textAlign: 'center'}}>
                <Button variant="success" className="mt-4 mr-4" onClick={handleAnswer}>Submit</Button>
                <Button variant="primary" className="mt-4 mr-4" onClick={handleSkip} disabled={questions.length < 2}>Skip</Button>
            </div>
            <div style={{textAlign: 'center'}}>
                <Button variant="secondary" size="sm" className="mt-4">Give Up</Button>
            </div>
            
        </>
    )
}

export default Game
