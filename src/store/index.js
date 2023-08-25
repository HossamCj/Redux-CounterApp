import { createSlice, createStore } from '@reduxjs/toolkit'


const initState = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        increase: (state, action) => {
            state.value += action.payload
        },
        decrease: (state, action) => {
            state.value -= action.payload
        }
    }
})


// WE DON't NEED THIS WAY FOR CREATING REDUCERS ANYMORE, WE CAN USE REDUX/TOOLKIT

// const counterReducer = (state = initialState, action) => {

//     if(action.type === 'increase') {
//         return {...state, value: state.value + action.payload}
//     } 

//     if (action.type === 'decrease') {
//         return {...state, value: state.value - action.payload}
//     }
    
//     if (action.type === 'counterToggle') {
//         return {...state, showCounter: !state.showCounter}
//     }

//     return state
// }


const store = createStore(counterSlice.reducer)

export const {increase, decrease } = counterSlice.actions

export default store