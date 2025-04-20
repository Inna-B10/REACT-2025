import {getCurrentDateFormatted} from '../utilities/getCurrentDateFormatted'

export function Greeting() {
  const name = "Lars"
  const date = getCurrentDateFormatted()

  return (
    <p>Hello {name}, {date}</p>
  )
}
