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

    return (
        <div>
            <Card className={"expenses"}>
            <ExpensesFilter onYearChange={onYearChangeHandler} selected={filterYear}/>
                {
                    filteredExpenses.map(expense => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}/>
                    ))
                }
            </Card>
        </div>
    );

}