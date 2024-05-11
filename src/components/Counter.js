import { useSelector,useDispatch,connect } from 'react-redux';
import classes from './Counter.module.css';
import {Component, components} from 'react';

const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter);

  const incrementby2handler=()=>{
    dispatch({type:'incrementby2'})
  }
  const decrementby2handler=()=>{
    dispatch({type:'decrementby2'})
  }
  const incrementby5handler=()=>{
    dispatch({type:'incrementby5'})
  }
  const decrementby5handler=()=>{
    dispatch({type:'decrementby5'})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementby2handler}>IncrementBy2</button>
        <button onClick={decrementby2handler}>DecrementBy2</button>
      </div>
      <div>
        <button onClick={incrementby5handler}>IncrementBy5</button>
        <button onClick={decrementby5handler}>DecrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;