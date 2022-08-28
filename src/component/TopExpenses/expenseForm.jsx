import React, { Component } from "react";
import "./expenseForm.css";

function ExpenseForm() {
  return;
  <form role="form">
      <div className="form-control">
          <label>Title</label>
          <input type="text" className="input-group"/>
      </div>
      <div className="form-control">
          <label>Amount</label>
          <input type="number" className="input-group" min="0.01" step="0.01"/>
      </div>
      <div className="form-control">
          <label>Date</label>
          <input type="date" className="input-group"/>
      </div>
  </form>;
}

export default ExpenseForm;
