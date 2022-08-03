import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
function NewExpense(props)
{
    const receivetoformdata = x => {
      const  data = x;
        props.receivetonewxpense(data);
    }
    return <div className="new-expense">
       <ExpenseForm receivetoform={receivetoformdata}/>
    </div>;
}
export default NewExpense;