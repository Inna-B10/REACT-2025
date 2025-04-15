export function EventHandling() {
  const greeting = "Hello"

  function handleClick() {
    console.log(greeting)
  }

  return (
    <button onClick={handleClick}>Click Me</button>
  )
}
