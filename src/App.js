import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Box from './components/Box'

function App() {
  let countNum = useSelector(state => state.countNum);
  let dispatch = useDispatch();
  let boxList = useSelector(state=>state.boxList)

  let incrementNumber = () =>{
    dispatch({type:'INCREMENT'})
  }
  let decrementNumber = () =>{
    dispatch({type:'DECREMENT'}) 
  }
  let renderBox = () => {
    return boxList && boxList.map((item,index)=><Box id={index}/>)
  }
  let backgroundChange = (color) => {
    dispatch({type: 'BACKGROUNDCOLOR',payload:color})
  }
  return (
    <div>
      <h2>{countNum}</h2>
      <button onClick={()=>incrementNumber()}>Increment</button>
      <button onClick={()=>decrementNumber()}>Decrement</button>
      <button>Reset</button>
      <input onChange = {e => backgroundChange(e.target.value)} />
      <div>{renderBox()}</div>



      <Box />
    </div>
  );
}

export default App;
