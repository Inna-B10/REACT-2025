import { useCounterStore } from "../../stores/useCounterStore"

export function StoreCounter() {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
 
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}