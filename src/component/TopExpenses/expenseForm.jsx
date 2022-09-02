import React, { Component } from "react";
import "./expenseForm.css";

function ExpenseForm(props) {
  //   const [enterTitle, setEnterTitle] = React.useState("");
  //   const [enterAmount, setEnterAmount] = React.useState("");
  //   const [enterdate, setEnterdate] = React.useState("");
  const [userInput, setUserInput] = React.useState({
    enterTitle: "",
    enterAmount: "",
    enterDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnterTitle(event.target.value);
    setUserInput((prevState) => {
      return { ...prevState, enterTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    // setEnterTitle(event.target.value);
    setUserInput((prevState) => {
        return {...prevState, enterAmount: event.target.value}
    });
  };
  const dateChangeHandler = (event) => {
    // setEnterTitle(event.target.value);
    setUserInput((prevState) => {
        return {...prevState, enterDate: event.target.value}
    });
  };
  function submitHandler(event) {
      event.preventDefault()
      const expenseData = {
       title: userInput.enterTitle,
       amount: userInput.enterAmount,
       date: new Date(userInput.enterDate)
      }
      props.onSaveExpenseData(expenseData )
      setUserInput({
        enterTitle: "",
        enterAmount: "",
        enterDate: "",
      })
    
  }
  return (
    <div>
      <form className="formHolder" onSubmit={submitHandler}>
        <div className="formH">
          <label>Title:</label>
          <input type="text" onChange={titleChangeHandler} value={userInput.enterTitle}/>
        </div>
        <div className="formH">
          <label>Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="formH">
          <label>Date: </label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={userInput.enterDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="formAction">
          <button type="submit">Add Expenses</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
