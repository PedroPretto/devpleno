import React, { useState, useEffect } from 'react';

import './styles.css';


import MostraVoltas from './MostraVoltas';

import MostraTempo from './MostraTempo';

import Button from './Button';



function App() {
  const [voltas, setVoltas] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [running, setRunning] = useState(false);


  useEffect(()=>{
    let timer = null;
    if(running){
      timer = setInterval(()=>{
        setTempo(old => old+1);
      }, 1000)
    }  
    return () => {
      if(timer) {
        clearInterval(timer);
      }
    }
  }, [running]);

  const toggleRunning = () => {
    setRunning(!running);
  }

  const increment = () => {
    setVoltas(voltas + 1);
  }

  const decrement = () => {
    setVoltas(voltas - 1);
  }
  return (
    <div className="App">
      <MostraVoltas voltas={voltas}/>
      <Button text='-' className='bigger' onClick={decrement}/>
      <Button text='+' className='bigger' onClick={increment}/>
      {
        voltas > 0 &&
        <MostraTempo tempo={Math.round(tempo/ voltas)}/>
      }
      <Button text='Iniciar' onClick={toggleRunning}/>
    </div>
  );
}

export default App;
