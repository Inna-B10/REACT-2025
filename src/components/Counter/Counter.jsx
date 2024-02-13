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
    <div className='bg-neutral-200 px-2 pt-4 pb-2 rounded-lg shadow-md border border-neutral-100/20'>
      <p className='flex w-24'>Count: <span className='font-semibold ml-auto overflow-hidden'>{count}</span></p>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-1'>
          <button className='grow font-extrabold bg-teal-300 hover:bg-teal-200 active:bg-teal-400 rounded-md border border-neutral-100/20' onClick={increment}>+</button>
          <button className='grow font-extrabold bg-teal-300 hover:bg-teal-200 active:bg-teal-400 rounded-md border border-neutral-100/20' onClick={decrement}>-</button>
        </div>
        <button className='font-semibold bg-red-300 hover:bg-red-200 active:bg-red-400 rounded-md border border-neutral-100/20' onClick={reset}>Reset</button>
      </div>
    </div>
  )
}