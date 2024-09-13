import React from 'react';
import bg from '../src/assets/bg3.jpg';
import './App.css';
import Header from './Components/Header';
import Button from './Components/Button';

const App = () => {
  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw'
    }}>
      <div style={{
        background: "linear-gradient(to right, #fc7bfa 0%, #8426df 30%, #9e2af2 51%, #ba33fc 73%, #9ec6e5 100%)",
        width: '60vw',
        height: '70vh',
        margin: '0 auto',
        position: 'relative',
        top: '15%' // Adjusted to center better
      }}>
     <Header/>
     <Button/>
      </div>
    </div>
  );
}

export default App;
