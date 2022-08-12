import React, { Component } from "react";
import "./Expense.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = React.useState(props.title);
  // console.log("ExpenseItem evaluated by React");
  function handle() {
    setTitle("Updated");
  }
  return (
    <div className="expenseItem">
      <ExpenseDate date={props.date} />
      <div className="expenseItemDescription">
        <h1>{title}</h1>
      </div>
      <div className="expenseItemPrice"> ${props.price}</div>
      <button className="btn__titleChanger" onClick={handle}>
        Change Title
      </button>
    </div>
  );
}

export default ExpenseItem;
