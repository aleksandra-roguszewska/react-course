import { useState } from "react";
import Card from "../Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseItem from "../ExpenseItem";
import "./ExpenseList.css";

export default function ExpenseList({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (event) => {
    setFilteredYear(event.target.value);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeHandler={filterChangeHandler}
        />
        {expenses.map((item) => (
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
