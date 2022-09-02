import React, { Component } from "react";
import Expense from "./component/Expenses/expense";
import "../src/App.css";
import ExpenseNew from "./component/TopExpenses/expenseNew";




const DummyExpenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 299.99,
    date: new Date(2021, 4, 24),
  },
  {
    id: "e2",
    title: "Fire Insurance",
    amount: 388.99,
    date: new Date(2021, 5, 25),
  },
  {
    id: "e3",
    title: "Life Insurance",
    amount: 477.99,
    date: new Date(2022, 6, 26),
  },
  {
    id: "e4",
    title: "Mar Insurance",
    amount: 566.99,
    date: new Date(2023, 7, 27),
  },
];
function ExpenseApp() {
  const [expenses, setExpenses] = React.useState(DummyExpenses)

  function AddEventHandler(expense) {
    setExpenses(prevState => {
      return [expense, ...prevState]
    })
  }
  return (
    <div className="container-fluid">
      <h1 className="text-center  frontPage ">
        Getting Started With Expenses Tracker
      </h1>
      <ExpenseNew onAddExpense={AddEventHandler} />
      <Expense item={expenses} />
    </div>
  );
}

export default ExpenseApp;
