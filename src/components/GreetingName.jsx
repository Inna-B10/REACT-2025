export function GreetingName(properties) {
  console.log(properties)

  return (
    <p>Hello first name: {properties.firstName}, middleName: {properties.middleName}</p>
  )
}