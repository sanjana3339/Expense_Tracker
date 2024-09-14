import './App.css';
import React, {useState}  from 'react';
import './Layout.css';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import ViewTransaction from './Components/ViewTrasactions/ViewTransaction';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses'
import { useGlobalContext } from './Context/globalContext';
function App() {
  const [active,setActive]=useState(1)

  const global=useGlobalContext()
  console.log(global) 

  const displaydata=()=>{
    switch(active)
    {
      case 1:
        return <Dashboard/>
      case 2:
        return <ViewTransaction/>
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  return (
    <div className="App">
      <Orb/>
      <div className="Main-layout">
      <Navigation active={active} setActive={setActive}/>
      <div className='main'>
        {displaydata()}
      </div>
      </div>
    </div>
  );
}


export default App;
