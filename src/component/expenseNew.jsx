import React, { Component } from "react";
// import "./ExpenseNew.css";
import "../component/expenseNew.css"
import ExpenseForm from "../component/expenseForm";

function ExpenseNew() {
  return (
    <div className="newExpense">
      <ExpenseForm />
    </div>
  );
}
export default ExpenseNew;
