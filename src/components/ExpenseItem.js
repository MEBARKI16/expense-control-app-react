import ExpenseDate from './ExpenseDate';
import { useState } from 'react';
import './ExpenseItem.css'
import Card from '../Card';
function ExpenseItem(props) {
const date = props.date;
const title = props.title;
const [title1,updtitle] = useState(title);
const price = props.amount;
const change = () => {
    updtitle('bonjour');
    console.log(title1);
}
    return (
        <Card className='expense-item'>
          <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{title1}</h2>
                <div className='expense-item__price'>${price}</div>
                <button onClick={change}>change title</button>
            </div>
        </Card>
    )
};
export default ExpenseItem;