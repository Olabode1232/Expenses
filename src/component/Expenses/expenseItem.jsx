import React, { Component } from "react";
import ExpenseDate from "./expenseDate";
import "./expenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex g-5 expenseItem">
          <ExpenseDate date={props.date} />
          <div className="expenseItemDesription">
            <h1>{props.title}</h1>
            <div className="expenseItemPrice">${props.amount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
