import { useState } from 'react';
import './counter.css'

import CounterButton from './counterButton';

export default function Counter({value}){

    const [count,setCount] = useState(0);

    function increaseCounterParentFunction(value){
        setCount(count + value);
    }

    function decreaseCounterParentFunction(value){
        setCount(count - value);
    }
    function reset(){
        setCount(0)
    }


 
    return (
        <>
         <span className="totalCount">{count}</span>
        <CounterButton value={1}  increaseParentMethod={increaseCounterParentFunction} decreaseParentMethod={decreaseCounterParentFunction}></CounterButton>
        <CounterButton value={2}  increaseParentMethod={increaseCounterParentFunction} decreaseParentMethod={decreaseCounterParentFunction}></CounterButton>
        <CounterButton value={3}  increaseParentMethod={increaseCounterParentFunction} decreaseParentMethod={decreaseCounterParentFunction}></CounterButton>
        <button onClick={reset} className="reset_btn">Reset</button>
        </>
    )
}


