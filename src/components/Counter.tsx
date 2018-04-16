import * as React from 'react';
import './Counter.css';

interface Props {
    count: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Count ({ count, onIncrement, onDecrement }: Props) {
    return (
        <div className="counter">
            <div>{count}</div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    );
}

export default Count;
