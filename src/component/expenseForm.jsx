import React, { Component } from "react";
// import "./ExpenseForm.css";
import "../component/expenseForm.css"


function ExpenseForm(props) {
  //  function inputChange(event) {
  //    console.log(event.target.value)
  //  }

  const [userInput, setUserInput] = React.useState({
    title: "",
    amount: "",
    date: "",
  });
  // console.log(userInput)
  function titleChanger(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  }
  function amountChanger(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  }
  function dateChanger(event) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  }
  function submitForm(event) {
    event.preventDefault();

    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };
    props.onSaveExpenseForm(expenseData)
   setUserInput(
    {
      title: "",
      amount: "",
      date: "",
    }
   )
  }

  return (
    <div className="formHolder">
      <form onSubmit={submitForm}>
        <div className="formTitle">
          <label>Title</label>
          <input  
            type="text"
            onChange={titleChanger} 
            value={userInput.title}
             />
        </div>
        <div className="formTitle">
          <label>Number</label>
          <input
            type="number"
            min="0.01"
            max="100"
            onChange={amountChanger}
            value={userInput.amount}
            
          />
        </div>
        <div className="formTitle">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChanger}
            value={userInput.date}
           
          />
        </div>
        <div className="formAction">
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
