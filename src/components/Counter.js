import classes from './Counter.module.css';
import { INCREMENTBY2,counterActions } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter);
  const show=useSelector(state=>state.showCounter);

  const incrementby2handler=()=>{
    dispatch(counterActions.incrementby2())
  }
  const decrementby2handler=()=>{
    dispatch(counterActions.decrementby2())
  }
  const incrementby5handler=()=>{
    dispatch(counterActions.incrementby5())
  }
  const decrementby5handler=()=>{
    dispatch(counterActions.decrementby5())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
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