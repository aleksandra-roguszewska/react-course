import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import NewExpenseButton from "./NewExpenseButton";
import { useState } from "react";

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setFormVisibility((currentFormVisibility) => !currentFormVisibility);
  };

  return (
    <div className="new-expense">
      {formVisibility ? (
        <ExpenseForm
          setFormVisibility={setFormVisibility}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <NewExpenseButton setFormVisibility={setFormVisibility} />
      )}
    </div>
  );
};

export default NewExpense;
