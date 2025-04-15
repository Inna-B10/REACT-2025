import { useState } from "react"

export function Counter() {
    const [count, setCount] = useState(0)

    // Using the count derive if its even or odd
    const isEven = (count % 2) === 0

    // using the previous value to calculate the new value
    function increment() {
        setCount((previousValue) => previousValue + 1)
    }

    function decrement() {
        // Disallow negative numbers
        if (count > 0) {
            setCount((previousValue) => previousValue - 1)
        }
    }

    // Setting it to an explicit value
    function reset() {
        setCount(0)
    }

    return (
        <div>
            <p style={{
                backgroundColor: isEven ? "cornflowerblue" : "",
                color: "black"
            }} >Count: {count}</p>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div >
    )
}