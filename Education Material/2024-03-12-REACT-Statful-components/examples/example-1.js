function App() {
    let count = 0

    function increment() {
        console.log(count)
        count++
    }

    return [`
      <div>
        <p>Count: ${count}</p>
  
        <button>Increment</button>
      </div>
    `,
        increment
    ]
}

const [result1, increment] = App()
increment()
increment()

const [result2, _] = App()

const diff = compare(result1, result2)
document.body.innerHTML = diff