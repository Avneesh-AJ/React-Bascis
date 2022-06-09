import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
let dummyexpenses = [];
const App = () => {
  const [expenses, setExpenses] = useState(dummyexpenses);
  function fetchData() {
    fetch("http://localhost:5000/data/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setExpenses(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addExpenseHandler = (expense) => {
    fetch("http://localhost:5000/create", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => {
      fetchData();
    });

    /*console.log(expense);
    setExpenses([expense, ...expenses]);
    console.log(expenses);*/
  };
  return (
    <div>
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
