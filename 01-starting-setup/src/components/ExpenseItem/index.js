import { useState } from "react";
import ExpenseDate from "../ExpenseDate/Index";
import Card from "../Card";
import "./ExpenseItem.css";

export default function ExpenseItem({ date, title, amount }) {
  const [taskTitle, setTaskTitle] = useState(title);

  const clickHandler = () => {
    setTaskTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>
      <div className="expense-item__description"></div>
      <h2>{taskTitle}</h2>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}
