import { createSlice,configureStore } from '@reduxjs/toolkit';

export const INCREMENTBY2='incrementby2'
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

const initialAuthState={isAuthenticated:false};

const authSlice=createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated=true;
        },
        logout(state){
            state.isAuthenticated=false;
        }
    }
})

const store = configureStore({
    reducer: {counter:counterSlice.reducer,auth:authSlice.reducer},
});

export const authActions=authSlice.actions;

export default store;
