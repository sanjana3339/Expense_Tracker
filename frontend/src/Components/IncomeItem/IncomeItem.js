import { FaCalendar, FaComment, FaRupeeSign, FaTrash } from 'react-icons/fa';
import { FaMoneyBill, FaPiggyBank, FaUniversity, FaWallet, FaBitcoin, FaUser, FaYoutube, FaBriefcase, FaDollarSign, FaCommentDollar, FaBuilding } from 'react-icons/fa';
import './IncomeItem.css';
import React from 'react';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {
  
  const categoryIcon = () => {
    switch (category) {
      case 'salary':
          return <FaMoneyBill />;
      case 'freelancing':
          return <FaBriefcase />;
      case 'investments':
          return <FaWallet />;
      case 'stocks':
          return <FaBuilding />;
      case 'bitcoin':
          return <FaBitcoin />;
      case 'bank':
          return <FaUniversity />;
      case 'youtube':
          return <FaYoutube />;
      case 'rent':
          return <FaCommentDollar />;
      case 'piggy':
          return <FaPiggyBank />;
      case 'family':
          return <FaUser />;
      case 'friends':
          return <FaUser />;
      case 'other':
          return <FaDollarSign />;
      default:
          return '';
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
        // case 'education':
        //     return book;
        // case 'groceries':
        //     return food;
        // case 'health':
        //     return medical;
        // case 'subscriptions':
        //     return tv;
        // case 'takeaways':
        //     return takeaway;
        // case 'clothing':
        //     return clothing;
        // case 'travelling':
        //     return freelance;
        // case 'other':
        //     return circle;
        default:
            return ''
    }
}

  return (
    <div className="IncomeItem">
      <div className='icon'>
      {type === 'expense' ? expenseCatIcon() : categoryIcon()}
      </div>
      <div className='content'>
        <h5>{title}</h5>
        <div className="inner-content">
            <div className="text">
                <p><FaRupeeSign /> {amount}</p>
                <p><FaCalendar /> {date}</p>
                <p><FaComment /> {description}</p>
            </div>
            <div className="btn-con">
                <button onClick={() => deleteItem(id)}>
                    <FaTrash />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeItem;
