import ExpenseDate from "../ExpenseDate/Index";
import Card from "../Card";
import "./ExpenseItem.css";

export default function ExpenseItem({ date, title, amount }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date}></ExpenseDate>
        <div className="expense-item__description"></div>
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </Card>
    </li>
  );
}
