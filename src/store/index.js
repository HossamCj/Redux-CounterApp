import { createStore } from 'redux'


const initiateState = {value: 0, showCounter: false}

const counterReducer = (state = initiateState, action) => {

    if(action.type === 'increase') {
        return {...state, value: state.value + action.payload}
    } 

    if (action.type === 'decrease') {
        return {...state, value: state.value - action.payload}
    }
    
    if (action.type === 'counterToggle') {
        return {...state, showCounter: !state.showCounter}
    }

    return state
}


const store = createStore(counterReducer)


export default store