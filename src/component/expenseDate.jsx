import React, { Component } from "react";
// import "./ExpenseDate.css";
import "../component/expenseDate.css";

function ExpenseDate(props) {
  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return (
    <div>
      <div className="expensesItemDate">
        <div>{day}</div>
        <div>{month} </div>
        <div>{year} </div>
      </div>
    </div>
  );
}
export default ExpenseDate;
