import './ExpenseItem.css'
function ExpenseItem() {
const date = new Date();
const title = "Car Insurance";
const price = 294.64;
    return (
        <div className='expense-item'>
            <div>{date.getDate()}</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${price}</div>
            </div>
        </div>
    )
};
export default ExpenseItem;