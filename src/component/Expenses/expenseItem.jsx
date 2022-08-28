import React, { Component } from "react";
import ExpenseDate from "./expenseDate";
import "./expenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = React.useState(props.title);
  function titleChanger() {
    setTitle("Updated")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex g-5 expenseItem">
          <ExpenseDate date={props.date} />
          <div className="expenseItemDesription">
            <h1>{title}</h1>
            <div className="expenseItemPrice">${props.amount}</div>
          </div>
          <button className="change" onClick={titleChanger}>Change title</button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
