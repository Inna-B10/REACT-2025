export function ComplexHandling() {

  function handleClick() {
    console.log("Button Clicked")
  }

  return (
    <button
      onClick={handleClick}
    >
      Click Me
    </button>
  )
}
