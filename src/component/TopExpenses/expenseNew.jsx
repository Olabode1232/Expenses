import React, { Component } from "react";
import ExpenseForm from "./expenseForm";
import "./expenseNew.css";

function ExpenseNew(props) {
    function SaveExpenseDataHandler (enterUserInput) {
        const expenseData = {
            ...enterUserInput,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
  return (
    <div className="text-center">
      <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler}/>
    </div>
  );
}

export default ExpenseNew;
