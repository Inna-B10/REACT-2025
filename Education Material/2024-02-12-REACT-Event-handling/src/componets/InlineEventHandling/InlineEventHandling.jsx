export function InlineEventHandling() {
  return (
    <button onClick={(event) => { console.log(event) }}>Click Me</button>
  )
}
