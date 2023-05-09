import { useState } from "react";
import Card from "../Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./ExpenseList.css";
import ExpensesList from "../ExpensesList/ExpensesList";

export default function ExpenseList({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
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
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
