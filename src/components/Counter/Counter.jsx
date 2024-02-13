import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount((oldCount) => { return oldCount + 1 })
  }

  function decrement() {
    setCount((oldCount) => { return oldCount - 1 })
  }

  function reset() {
    setCount(0)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}