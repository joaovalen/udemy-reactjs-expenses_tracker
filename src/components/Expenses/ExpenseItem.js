// A component in React is just a JS function
// You must have only one root element for every return statement

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// props é o objeto que recebe todos os valores vindos dos atributos que queremos dar para os componentes
const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount} </div>
        </Card>
    )
}

export default ExpenseItem;