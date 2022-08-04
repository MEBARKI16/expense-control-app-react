import './ExpenseList.css'
import ExpenseItem from './components/ExpenseItem';
function ExoenseList(props)
{
    let x;
    if (props.item.length === 0) { return <h2 className='expenses-list__fallback'>No Expenses Found.</h2>}
    return <ul className='expenses-list'>{props.item.map(x => <ExpenseItem key={x.id} title={x.title} amount={x.amount} date={x.date}/>)}</ul>
}
export default ExoenseList;