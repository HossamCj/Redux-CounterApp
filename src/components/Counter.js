import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {increase, decrease} from '../store/counterSlice'
import { login, logout } from '../store/authSlice'


const Counter = () => {

    // Using one global state that we can use it everywhere in app
    const globalState = useSelector((state) => state)
    const dispatch = useDispatch()
    
    const isLoggedIn = () => {
        return globalState.auth.isLoggedIn
    }

    const authHandler = (status) => {
        if (status) {
            dispatch(logout())
        } else {
            dispatch(login())
        }
    }
    

    return (
        <>
            <div className='App'>
                <h1>Counter App, + Login/Logout Feature</h1>
                {
                    isLoggedIn() && (
                        <>
                            <div className='counter'>Counter: { globalState.counter.value }</div>
                            
                            <button className='btn' onClick={() => dispatch(increase(2))}>
                                increase +
                            </button>
                            <button className='btn danger' onClick={() => dispatch(decrease(2))}>
                                decrease -
                            </button>
                        </>

                    )
                }

                <hr />

                <div>
                    <button 
                        className={`btn ${isLoggedIn() ? 'hide' : 'success'}`}
                        onClick={ () => authHandler(isLoggedIn()) }
                    >
                        {
                            globalState.auth.isLoggedIn ? 'logout' : 'login'
                        }
                    </button>
                </div>
            </div>
        </>
    );
}

export default Counter
