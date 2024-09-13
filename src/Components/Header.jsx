import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const counter = useSelector((state) => state.counter.counter); 

    
  
    return (
        <div style={{ margin: "0 auto", textAlign: "center", position:"relative",top:"20%",fontSize:"24px",fontFamily:"monospace"}}>
            <h1>Count {counter}</h1>
        </div>
    );
};

export default Header;
