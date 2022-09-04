import React, { Component } from "react";
import Expensefilter from "./expenseFilter";
import ExpenseList from "./expenseList"

function Expense(props) {
  const [filteredYear, setFilteredYear] = React.useState("2020");

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div className="bg-dark rounded-5 w-full ">
      <Expensefilter selected={filteredYear} onChangeFilter={filterHandler} />
      <ExpenseList items={filteredExpenses}/>

      {/* <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      /> */}
    </div>
  );
}

export default Expense;
