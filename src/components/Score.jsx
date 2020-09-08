import React from 'react'
import {useGame} from '../utils/useGame'

const Score = () => {
    const {score} = useGame()

    return (
        <div>
            <p>Score</p>
            <p>{score}</p>
        </div>
    )
}

export default Score
