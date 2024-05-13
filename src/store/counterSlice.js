import { createSlice } from '@reduxjs/toolkit';
const initialCounterState={ counter: 0,showCounter:true };

const counterSlice=createSlice({
    name:'counter',
    initialState:initialCounterState,
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

export default counterSlice.reducer;