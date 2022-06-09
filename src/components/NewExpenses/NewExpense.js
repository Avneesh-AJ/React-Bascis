import React from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expensedata = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expensedata);
    // console.log(expensedata);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDataHandler={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
