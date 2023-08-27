import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

// Importing Reducers.Actions from the STORE
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
            dispatch(logout(5))
        } else {
            dispatch(login())
        }
    }

    const counterHandler = useCallback((type, value) => {
        if (type === 'increase') {
            dispatch(increase(value))
        } else if (type === 'decrease') {
            dispatch(decrease(value))
        }
    }, [dispatch])


    useEffect(() => {
         counterHandler('increase', 20)
    }, [])
    

    return (
        <>
            <div className='App'>
                <h1>Counter App, + Login/Logout Feature</h1>
                {
                    isLoggedIn() && (
                        <>
                            <div className='counter'>Counter: { globalState.counter.value }</div>
                            
                            <button className='btn' onClick={ () => counterHandler('increase', 5) }>
                                increase +
                            </button>
                            <button className='btn danger' onClick={ () => counterHandler('decrease', 5) }>
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
                            isLoggedIn() ? 'logout' : 'login'
                        }
                    </button>
                </div>
            </div>
        </>
    );
}

export default Counter
