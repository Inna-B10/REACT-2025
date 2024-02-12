function counter() {
  let count = 0

  const text = `current count = ${count}`

  function update() {
    count++
    console.log("Current count", count)
  }
  return {
    text,
    update,
  }
}

const testA = counter()
console.log(testA.text)
testA.update()
testA.update()
testA.update()
console.log(testA.text)