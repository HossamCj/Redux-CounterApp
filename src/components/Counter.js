import React from 'react'
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Counter = () => {
 // Using one global state that we can use it everywhere in app
 const globalState = useSelector((state) => state)
 const dispatch = useDispatch()

 const counterOperation = useCallback((type, payload) => {
     dispatch({type, payload})
 }, [dispatch])

 // Herer we handling the counter value if it's less that 0, then show "No Number"
 const counterHandler = (value) => {
     if (value < 1) {
         // when it going to be less that 0, like -1....make the value equal to 0
         globalState.value = 0
         return 'No number'
     }

     return value
 }
 
 const counterToggle = () => dispatch({ type: 'counterToggle'})
 
 
 return (
     <>
         <div className='App'>
             <h1>Hello Redux Basic</h1>
             <div className='counter'>Counter: { counterHandler(globalState.value) }</div>

             {
                 globalState.showCounter && 
                 <>
                     <button 
                         className='btn'
                         onClick={ () => counterOperation('increase', 1) }
                     >
                         increase +
                     </button>
                     <button 
                         className='btn danger'
                         onClick={ () => counterOperation('decrease', 1) }
                     >
                         decrease -
                     </button>
                 </>
             }
             
             <div>
                 <button 
                     className='btn hide'
                     onClick={ counterToggle }
                 >
                     Hide/Show Counter Number
                 </button>
             </div>
         </div>
     </>
 );
}

export default Counter
