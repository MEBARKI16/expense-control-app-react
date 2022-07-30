import './ExpenseItem.css'
function ExpenseItem(props) {
const date = props.date;
const title = props.title;
const price = props.amount;
    return (
        <div className='expense-item'>
            <div>{date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${price}</div>
            </div>
        </div>
    )
};
export default ExpenseItem;