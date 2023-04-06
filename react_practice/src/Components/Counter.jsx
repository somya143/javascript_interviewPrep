import React from 'react';
import Button from './Button';

const Counter = () => {
    const [count , setCount] = React.useState(0);
    let increament = () => {
        setCount(count+1)
    }
    let decreament = () => {
        setCount(count-1)
    }
    let resetCount = () => {
        setCount(0)  
    }
  return (
    <>
    <div>Counter : {count}</div>
    <Button title={"Inc"} handleClick={increament} />
    <Button title={"Dec"} handleClick={decreament} />
    <Button title={"Reset"} handleClick={resetCount} />
    </>
  )
}

export default Counter