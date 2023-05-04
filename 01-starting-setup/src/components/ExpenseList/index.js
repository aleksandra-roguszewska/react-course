import ExpenseItem from "../ExpenseItem";
import "./ExpenseList.css";

export default function ExpenseList({ expenses }) {
  return (
    <div className="expenses">
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
}
