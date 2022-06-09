import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  //console.log(data);
  return (
    <Card className="expenses">
      {props.item.map((expense) => (
        <ExpenseItem
          date={expense.date}
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
