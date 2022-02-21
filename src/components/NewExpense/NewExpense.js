import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
        setShowForm(false);
    };

    const showFormHandler = () => {
        setShowForm(true);
    }

    const hideFormHandler = () => {
        setShowForm(false);
    }

    return (
        <div className={"new-expense"}>
            {showForm && (
                <ExpenseForm
                    onHideForm={hideFormHandler}
                    onSaveExpenseData={saveExpenseHandler}/>
            )}
            {!showForm && (
                <button onClick={showFormHandler}>Add New Expense</button>
            )}
        </div>
    );
}

export default NewExpense;