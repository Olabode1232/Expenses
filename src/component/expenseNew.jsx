import React, { Component } from "react";
// import "./ExpenseNew.css";
import "../component/expenseNew.css"
import ExpenseForm from "../component/expenseForm";

function ExpenseNew(props) {
 const saveExpenseDateHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpenseNew(expenseData)
  }
  return (
    <div className="newExpense">
      <ExpenseForm onSaveExpenseForm={saveExpenseDateHandler}/>
    </div>
  );
}
export default ExpenseNew;
