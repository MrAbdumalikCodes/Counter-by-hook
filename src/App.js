import './App.scss';

import React,{useState} from 'react'

export default function App() {
  const [count,setCount] = useState(0)

  function inc(){
  count < 50 ? setCount(count + 1) : setCount(count * 0)
  }

  function dec(){
    count > -50 ? setCount(count - 1) : setCount(count * 0)
  }
  function res(){
    setCount(count * 0)
  }
  function ran(){
    setCount(Math.floor(Math.random() * 50) * -1 + Math.floor(Math.random() * 50))
  }
  return (
    <>
    <div className='count-box'>
      <div className='count-num'>{count}</div>
      <div className='btns'>
        <div onClick={res} className='btn'>reset</div>
        <div onClick={inc} className='btn'>+</div>
        <div onClick={dec} className='btn'>-</div>
        <div onClick={ran} className='btn'>random</div>
      </div>
    </div>
    </>
  )
}


