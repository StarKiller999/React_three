import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(5);

    function increment() {
        setCount(count + 5)
    }
    function decrement() {
        setCount(count - 5)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
export default Counter;