import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

export default function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2020');

    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === filterYear;
    });

    const onYearChangeHandler = year => {
        setFilterYear(year)
    }

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}/>
        ));
    }

    return (
        <div>
            <Card className={"expenses"}>
            <ExpensesFilter onYearChange={onYearChangeHandler} selected={filterYear}/>
                {expensesContent}
            </Card>
        </div>
    );

}