import './Expenses.css';
import React, { useEffect }  from 'react';
import '../../Layout.css';
import { useGlobalContext } from '../../Context/globalContext';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import IncomeItem from '../IncomeItem/IncomeItem';
function Expense() {
  const {addExpense,expenses,getExpense,deleteExpense, totalExpense}=useGlobalContext()
  useEffect(()=>{
    getExpense()
  },[])
  return (
    <div className="Expense">
  <div className='Inner-layout'>
    <h1>Expenses</h1>
    <h2 className="total-expense">Total Expense: <span>₹{totalExpense()}</span></h2>
    <div className='expense-content'>
      <div className='form-container'>
        <ExpenseForm />
      </div>
      <div className='expenses'>
        {expenses.map((expense) => {
          const { _id, title, amount, date, category, description, type } = expense;
          return (
            <IncomeItem 
              key={_id}
              id={_id} 
              title={title} 
              description={description} 
              amount={amount} 
              date={date} 
              type={type}
              category={category}
              deleteItem={deleteExpense}
            />
          );
        })}
      </div>
    </div>
  </div>
</div>

  );
}


export default Expense;
