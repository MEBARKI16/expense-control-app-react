import ExpenseItem from "./components/ExpenseItem";
import './Expense.css'
import Card from './Card'
function Expense(props){
   const expenses = props.expense;
    return(
        <Card className="expenses">
        {expenses.map(x => <ExpenseItem title={x.title} amount={x.amount} date={x.date}/>)}
        </Card>
    )
}
export default Expense;
