import React from 'react'
import Card from 'react-bootstrap/Card'

const Question = ({ query, handleOptionChange }) => {
    return (
        <div>
            <Card className="text-center">
                <Card.Header>Question {query.id}</Card.Header>
                <Card.Body>
                    <Card.Title>{query.question}</Card.Title>
                    <Card.Text>
                            {query.options.map(option => (
                                <li key={option}>
                                    <input type="radio" name="opt" value={option} onChange={handleOptionChange} />{option}
                                </li>
                            ))}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Question
