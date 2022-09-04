import React, { Component } from "react";
import ExpenseItem from "./expenseItem";
import "./expenseList.css"

function ExpenseList(props) {
  if (props.items.length === 0) { 
   return <p className="expensesListFallback">No expenses found</p>;
  }

  return (
    <ul>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        ))}
    </ul>
  );
}

export default ExpenseList;
