// import React, { Component } from "react";
// import ExpenseItem from "./ExpenseItem"
// import "./ExpenseApp.css"
// import ExpenseNew from "./ExpenseNew";


// function ExpenseApp() {
//   const expenses = [
//     {
//       id: 1,
//       title: "Car insurance",
//       date: new Date(2022, 7, 5),
//       price: 999.99,
//     },
//     {
//       id: 2,
//       title: "Life insurance",
//       date: new Date(2022, 7, 5),
//       price: 888.99,
//     },
//     {
//       id: 3,
//       title: "Fire insurance",
//       date: new Date(2022, 7, 5),
//       price: 777.99,
//     },
//     {
//       id: 4,
//       title: "House insurance",
//       date: new Date(2022, 7, 5),
//       price: 666.99,
//     },
//   ];

//   return (
//     <div className="app">
//       {/* <h1>Let's get Started!</h1> */}
//       <ExpenseNew/>
//       <div className="overall">
//         <ExpenseItem
//           title={expenses[0].title}
//           date={expenses[0].date.toISOString()}
//           price={expenses[0].price}
//           className="overall__child"
//         />
//         <ExpenseItem
//           title={expenses[1].title}
//           date={expenses[1].date.toISOString()}
//           price={expenses[1].price}
//           className="overall__child"

//         />
//         <ExpenseItem
//           title={expenses[2].title}
//           date={expenses[2].date.toISOString()}
//           price={expenses[2].price}
//           className="overall__child"

//         />
//         <ExpenseItem
//           title={expenses[3].title}
//           date={expenses[3].date.toISOString()}
//           price={expenses[3].price}
//           className="overall__child"

         
//         />
//       </div>
//     </div>
//   );
// }

// export default ExpenseApp;
