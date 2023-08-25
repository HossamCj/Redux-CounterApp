import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {increase, decrease} from '../store/index'


const Counter = () => {

    // Using one global state that we can use it everywhere in app
    const globalState = useSelector((state) => state)
    const dispatch = useDispatch()
    

    return (
        <>
            <div className='App'>
                <h1>Hello Redux Basic</h1>
                <div className='counter'>Counter: { globalState.value }</div>

                    <button className='btn' onClick={() => dispatch(increase(2))}>
                        increase +
                    </button>
                    <button className='btn danger' onClick={() => dispatch(decrease(2))}>
                        decrease -
                    </button>
                    <div>
                    <button className='btn hide'>
                        Hide/Show Counter Number
                    </button>
                </div>
            </div>
        </>
    );
}

export default Counter
