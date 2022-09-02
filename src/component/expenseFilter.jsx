import React, { Component } from "react";
import "./expenseFilter.css";

function Expensefilter(props) {
  function dropdownChangeHandler(event) {
     props.onChangeFilter(event.target.value);
  }
  return (
    <div>
      <div className="expenseFilterChild">
        <label className="labelFilter">Filter by Year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2022 ">2020</option>
        </select>
      </div>
    </div>
  );
}

export default Expensefilter;
