import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import {  decrement, increment, reset, incrementByAmount } from "./counter/counterSlice.jsx";

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] =   useState(0)
    const addValue = Number(incrementAmount) || 0
    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }
    return (
        <section className="container">
            <span className="header">{count}</span>
            <div>
               <button className="btn btn-primary" onClick={() => dispatch(increment())}>+</button>
               <button className="btn btn-info" onClick={() => dispatch(decrement())}>-</button>
                <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e?.target.value)}/>
                <div>
                    <button className="btn btn-warning">

                    </button>
                    <button className="btn btn-succes" onClick={() => dispatch(incrementByAmount(addValue))}>
                        Add Amount
                    </button>
                    <button className="btn btn-succes" onClick={resetAll}>
                        Reset
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Counter