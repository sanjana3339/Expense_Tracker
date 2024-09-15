import './Form.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../Context/globalContext';
import { FaPlus } from "react-icons/fa6";

function Form() {

    const { addIncome ,error,setError } = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value });
        setError('')
    };

    const handleSubmit = e => {
        console.log("Hello")
        e.preventDefault();
        addIncome(inputState);
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        });
    };

    return (
        <form className="Form" onSubmit={handleSubmit}>
        {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input 
                    type="text" 
                    value={title}
                    name={'title'}
                    placeholder="Income Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input 
                    value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Income Amount'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <div className="input-control">
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={date => {
                        setInputState({ ...inputState, date: date });
                    }}
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled>Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="rent">Rent</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="piggy">Pocket Money</option>  
                    <option value="family">Family</option>
                    <option value="friends">Friends</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea 
                    name="description" 
                    value={description} 
                    placeholder='Add A Reference' 
                    id="description" 
                    cols="50" 
                    rows="3" 
                    onChange={handleInput('description')}
                ></textarea>
            </div>
            <div className="submit-btn">
                <button type="submit" className="add-income-btn">
                    <FaPlus /> Add Income
                </button>
            </div>
        </form>
    );
}

export default Form;
