import React, { Component } from 'react';
import "../component/expenseFilter.css"


const ExpenseFilter = (props) => {
    const dropDownFilter = (event) => {
        props.onChangeFilter(event.target.value)
    }
    return (
        <div className="expenseFilter">
           <div className="expenseFilterChild" >
               <label>Filter by Year</label>
               <select value={props.selected} onChange={dropDownFilter}>
                   <option value="2022">2022</option>
                   <option value="2021">2021</option>
                   <option value="2020">2020</option>
                   <option value="2019">2019</option>
                   <option value="2018">2018</option>
                   <option value="2017">2017</option>
               </select>

           </div>
    </div>
    )
}

export default ExpenseFilter