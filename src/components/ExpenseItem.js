import ExpenseDate from './ExpenseDate';
import { useState } from 'react';
import './ExpenseItem.css'
import Card from '../Card';
function ExpenseItem(props) {
const date = props.date;
const title = props.title;
const [title1,updtitle] = useState(title);
const price = props.amount;
    return (
        <Card className='expense-item'>
          <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{title1}</h2>
                <div className='expense-item__price'>${price}</div>
            </div>
        </Card>
    )
};
export default ExpenseItem;