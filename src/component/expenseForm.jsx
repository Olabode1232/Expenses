import React, { Component } from "react";
// import "./ExpenseForm.css";
import "../component/expenseForm.css";

function ExpenseForm(props) {
  //  function inputChange(event) {
  //    console.log(event.target.value)
  //  }

  const [userInput, setUserInput] = React.useState({
    title: "",
    price: "",
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
        price: event.target.value,
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
      price: userInput.price,
      date: userInput.date,
    };
    props.onSaveExpenseForm(expenseData);
    setUserInput({
      title: "",
      price: "",
      date: "",
    });
  }

  return (
    <div className="formHolder">
      <form onSubmit={submitForm}>
        <div className="formTitle">
          <label>Title</label>
          <input type="text" onChange={titleChanger} value={userInput.title} />
        </div>
        <div className="formTitle">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChanger}
            value={userInput.price}
          />
        </div>
        <div className="formTitle">
          <label>Date</label>
          <input type="Date" onChange={dateChanger} value={userInput.date} />
        </div>
        <div className="formAction">
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
