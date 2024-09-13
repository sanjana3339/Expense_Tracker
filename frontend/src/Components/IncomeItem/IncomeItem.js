import { FaCalendar, FaComment, FaRupeeSign, FaTrash } from 'react-icons/fa';
import { FaMoneyBill, FaPiggyBank, FaUniversity, FaWallet, FaBitcoin, FaUser, FaYoutube, FaBriefcase, FaDollarSign, FaCommentDollar, FaBuilding } from 'react-icons/fa';
import { FaBook, FaShoppingCart, FaHeartbeat, FaTv, FaTshirt, FaPlane, FaUserFriends, FaHome, FaRegCircle, FaMoneyBillWave } from 'react-icons/fa';
import './IncomeItem.css';
import {dateFormat} from '../../Utils/dateFormat';
import React from 'react';
import { IoFastFood } from "react-icons/io5";

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
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
        case 'education':
          return <FaBook />;
        case 'groceries':
          return <FaShoppingCart />;
        case 'health':
          return <FaHeartbeat />;
        case 'subscriptions':
          return <FaTv />;
        case 'clothing':
          return <FaTshirt />;
        case 'food':
            return <IoFastFood />;
        case 'travelling':
          return <FaPlane />;
        case 'friends':
          return <FaUserFriends />;
        case 'family':
          return <FaHome />;
        case 'loan':
          return <FaMoneyBillWave />;
        case 'other':
          return <FaRegCircle />;
        default:
          return '';
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
                <p><FaCalendar /> {dateFormat(date)}</p>
                <p><FaComment /> {description}</p>
            </div>
            <div className="btn-con">
                <button onClick={() => deleteItem(id)}>
                    <FaTrash size={17} />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeItem;
