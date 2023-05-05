import { useState } from "react";
import Card from "../Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseItem from "../ExpenseItem";
import "./ExpenseList.css";

export default function ExpenseList({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (argument) => {
    setFilteredYear(argument);
  };

  const filteredExpenses = expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChangeHandler={filterChangeHandler}
        />
        {filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  );
}
