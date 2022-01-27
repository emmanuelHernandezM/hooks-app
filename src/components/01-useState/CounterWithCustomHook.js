import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100);

    return (
        <>
            <h1>Counter whit Hook: {state}</h1>
            <hr/>

            <button 
                className='btn btn-primary m-1' 
                onClick={() => increment(2)}>
                +1
            </button>
            <button 
                className='btn btn-warning m-2' 
                onClick={reset}
                >
                Reset
            </button>
            <button 
                className='btn btn-danger m-2' 
                onClick={() => decrement(2)}>
                -1
            </button>
        </>
    );
};
