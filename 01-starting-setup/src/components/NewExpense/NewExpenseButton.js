const NewExpenseButton = ({ setFormVisibility }) => {
  return (
    <button
      onClick={() =>
        setFormVisibility((currentVisibility) => !currentVisibility)
      }
    >
      Add New Expense
    </button>
  );
};

export default NewExpenseButton;
