import React from 'react';
import './Navigation.css';
import useravatar from '../../Images/useravatar.png';
import { menuItems } from '../../Utils/menuItems';
import { FaSignOutAlt } from "react-icons/fa";

function Navigation({active,setActive}) {
    
  return (
    <div className="Navigation">
        <div className='user-av'>
            <img src={useravatar}/>
            <div className="text">
                    <h2>Krish</h2>
                    <p>Your Money</p>
            </div>
        </div>
        <div>
            <ul className='menu-items'>
                {menuItems.map((item)=>{
                    return <li key={item.id}
                    onClick={()=>setActive(item.id)}
                    className={active===item.id?'active':''}>
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
                <div className='bottom-nav'>
                <li>
                <FaSignOutAlt /> Sign Out
                </li>
            </div>
            </ul>
        </div>
    </div>
  );
}


export default Navigation;
