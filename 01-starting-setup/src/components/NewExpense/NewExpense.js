import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import NewExpenseButton from "./NewExpenseButton";
import { useState } from "react";

const NewExpense = (props) => {
  const [formVisibility, SetFormVisibility] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {formVisibility ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <NewExpenseButton setFormVisibility={SetFormVisibility} />
      )}
    </div>
  );
};

export default NewExpense;
