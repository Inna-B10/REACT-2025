export function MouseTracker() {

  function logCoordinates(x, y) {
    console.log({
      x,
      y,
    })
  }

  return (
    <div onMouseMove={(event) => { logCoordinates(event.clientX, event.clientY) }} style={{ width: "300px", height: "300px", backgroundColor: "coral" }}>
    </div>
  )
}
