import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "../features/counterSlice"

const Counter = () => {

    const count = useSelector((state) => state.counter.value) //Accessing value from store

    const dispatch = useDispatch()
    /* The useDispatch hook is used to dispatch actions (i.e., update the Redux store). */

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
    )

}


export default Counter