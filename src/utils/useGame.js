import React, {useState, useContext} from 'react'
import {questionsArray} from './questions'

const GameContext = React.createContext()

export const useGame = () => {
    return useContext(GameContext)
}

export const GameProvider = ({children}) => {
    const [questions, setQuestions] = useState(questionsArray)
    const [gameStarted, setGameStarted] = useState(false)
    const [score, setScore] = useState(0)

    const removeAnsweredQuestion = () => {
        let myList = [...questions]
        myList.shift()
        setQuestions(myList)
    }

    const skipQuestion = () => {
        let myList = [...questions]
        let firstQ = myList.shift()
        myList.push(firstQ)
        setQuestions(myList)
    }

    const startGame = () => setGameStarted(true)

    const endGame = () => {
        setQuestions(questionsArray)
        setGameStarted(false)
    }
    
    const incrementScore = () => setScore(prevScore => prevScore + 1)

    const resetScore = () => setScore(0)
    
    return (
        <GameContext.Provider value={{
            questions, 
            gameStarted,
            score,  
            removeAnsweredQuestion, 
            skipQuestion, 
            startGame, 
            endGame,
            incrementScore,
            resetScore
        }}>
            {children}
        </GameContext.Provider>
    )
    
}