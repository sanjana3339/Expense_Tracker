import './Income.css';
import React  from 'react';
import '../../Layout.css';
import { useGlobalContext } from '../../Context/globalContext';
import Form from '../Form/Form';
function Income() {
  const {addIncome}=useGlobalContext()
  return (
    <div className="Income">
      <div className='Inner-layout'>
      <h1>Income</h1>
      <div className='income-content'>
          <div className='form-container'>
            <Form/>
            <div className='incomes'>

            </div>
          </div>
      </div>
      </div>
    </div>
  );
}


export default Income;
