import React from 'react';
import './ExpenseForm.css'
import {useState} from 'react';
function ExpenseForm()
{
   /// const [title,setTitle] = useState('');
   // const [amount,setAmount] = useState('');
  //  const [date,setDate] = useState('');
  const [inputData,setInputData] = useState({
    title : '',
    amount : '',
    date: ''
  })
    const inputTitle = (event) => {
        const tit = event.target.value;
     //   setTitle(tit);
     setInputData({
        ...inputData,
        title : tit
     })
    }
    const inputAmount = (event) => {
        const amoun = event.target.value;
      //  setAmount(amoun);
      setInputData((inputData) => {
        return{
             ...inputData,
        amount : amoun}
     })
    }
    const inputDate = (event) => {
         const dat = event.target.value;
        // setDate(dat);
        setInputData({
            ...inputData,
            date : dat
         })
    }
    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={inputTitle}/>
                </div>
                <div className='new-expense__control' >
                    <label>Amount</label>
                    <input type='number' min='0,01' step='0,01' onChange={inputAmount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={inputDate}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;