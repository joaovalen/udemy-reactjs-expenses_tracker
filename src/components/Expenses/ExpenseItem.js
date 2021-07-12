// A component in React is just a JS function
// You must have only one root element for every return statement
import React from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// props é o objeto que recebe todos os valores vindos dos atributos que queremos dar para os componentes
const ExpenseItem = (props) => {
    // useState is a React Hook and must be called inside react component functions and not nested
    
    // useState returns an array with 2 elements, the current state value and the function for updating that

    // by calling the setTitle function we are telling react that we want to assign a new value and reevaluete the component (executing it again)

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;