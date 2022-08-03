import { useState } from "react";
import Expense from "./Expense";
import NewExpense from "./components/NewExpense";
const expenses1 = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses,setExpenses] = useState(expenses1);
 
const receivedata = data => {
  const x = data;
  const datas = {
    ...x,
    date : new Date(x.date),
    id : Math.random()
  }
  console.log(datas);
  setExpenses([datas, ...expenses])
  console.log(expenses);
}
  
  return (
    <div>
    <NewExpense receivetonewxpense={receivedata}/>
   <Expense expense={expenses}/>
    </div>
   );
}

export default App;
