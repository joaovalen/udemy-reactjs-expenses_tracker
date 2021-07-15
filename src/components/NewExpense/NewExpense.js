import './NewExpense.css';
import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isActive, setActive] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setActive(false);
    };

    const activateFormHandler = () => {
        setActive(true);
    }

    const desactivateFormHandler = (props) => {
        setActive(false);
    }

    return (
        <div className="new-expense">
            {!isActive && <button onClick={activateFormHandler}>Add New Expense</button>}
            {isActive && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={desactivateFormHandler} />}
        </div>
    )
};

export default NewExpense;