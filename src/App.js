import { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense";

const dummyExpenses = [
  {
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  }
];

function App(){    
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => [expense, ...previousExpenses])
  }

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}

      {/* <p>This is also visible.</p> */}

      <NewExpense onAddExpense={ addExpenseHandler }/>

      <Expenses expenseItems={ expenses } />
    </div>
  );
}

export default App;