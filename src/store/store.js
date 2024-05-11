import { createSlice,configureStore } from '@reduxjs/toolkit';

export const INCREMENTBY2='incrementby2'
const initialState={ counter: 0,showCounter:true };

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        incrementby2(state){
            state.counter += 2;
        },
        decrementby2(state){
            state.counter -= 2;
        },
        incrementby5(state){
            state.counter += 5;
        },
        decrementby5(state){
            state.counter -= 5;
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter;
        }
    }
});

export const counterActions=counterSlice.actions;





const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;
