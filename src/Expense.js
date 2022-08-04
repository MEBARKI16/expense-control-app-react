import ExpenseItem from "./components/ExpenseItem";
import './Expense.css'
import Card from './Card'
import ExpenseList from './ExpenseList'
function Expense(props){
   const expenses = props.expense;
    let x;
   if (expenses.length === 0) { x = <p>No Expenses Found.</p>}
   else { x = expenses.map(x => <ExpenseItem key={x.id} title={x.title} amount={x.amount} date={x.date}/>)}
    return(
        <Card className="expenses">
            <ExpenseList item={expenses} />     
        </Card>
    )
}
export default Expense;
