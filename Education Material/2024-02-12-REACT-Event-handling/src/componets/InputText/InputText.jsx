export function InputText() {

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} event 
   */
  function handleChange(event) {
    console.log(event.target.value)
  }

  /**
   * @param {string} value 
   */
  function logValue(value) {
    console.log(value)
  }

  return (
    <div>
      <input onChange={handleChange} type="text" placeholder="Write here" />
      <input onChange={(event) => logValue(event.target.value)} type="text" placeholder="Write here" />
    </div>
  )
}