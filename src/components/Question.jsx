import React from 'react'
import Card from 'react-bootstrap/Card'
import {shuffleArray} from '../utils/helperFunctions'

const Question = ({ query, handleOptionChange }) => {
    const shuffledOptions = shuffleArray(query.options)

    return (
        <div>
            <Card className="text-center" style={{width: '30rem', margin: '0 auto'}}>
                <Card.Header>Question {query.id}</Card.Header>
                <Card.Body>
                    <Card.Title>{query.question}</Card.Title>
                    <Card.Text>
                        {shuffledOptions.map(option => (
                            <li key={option}>
                                <input type="radio" name="opt" value={option} onChange={handleOptionChange} /> {option}
                            </li>
                        ))}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Question
