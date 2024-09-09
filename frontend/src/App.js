import './App.css';
import React, {useState}  from 'react';
import './Layout.css';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
function App() {
  const [active,setActive]=useState(1)
  return (
    <div className="App">
      <Orb/>
      <div className="Main-layout">
      <Navigation active={active} setActive={setActive}/>
      <div className='main'>
        
      </div>
      </div>
    </div>
  );
}


export default App;
