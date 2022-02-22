import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

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
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );

}