import React,{useEffect} from 'react';
import './Orb.css';
import {keyframes} from 'styled-components';
import useWindowSize from '../../Utils/usewindowsize';

function Orb() {
  const {width,height}=useWindowSize()
  console.log(width,height)
  useEffect(() => {
    // Update CSS variables dynamically
    document.documentElement.style.setProperty('--move-x', `${width}px`);
    document.documentElement.style.setProperty('--move-y', `${height / 2}px`);
  }, [width, height]);
  return (
    <div className="Orb">
      
    </div>
  );
}


export default Orb;
