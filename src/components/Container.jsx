export function Container(properties) {
  console.log(properties)

  return (
    <div className="container">
      {properties.children}
    </div>
  )
}