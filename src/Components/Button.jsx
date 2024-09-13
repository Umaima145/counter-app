import React from 'react'
import { useDispatch } from 'react-redux'
import { addCounter, minusCounter } from '../Store/Slice/CounterSlice'
import './button.module.css'
const Button = () => {
  const dispatch = useDispatch()

  const HandleAdd=()=>{
    dispatch(addCounter())
  }

  const HandleMinus =()=>{
    dispatch(minusCounter())
  }
  
  return (
    <>
    
    
    <button onClick={HandleAdd}>ADD</button>

    <button onClick={HandleMinus}>Minus</button>
  
    </>
  )
}

export default Button
