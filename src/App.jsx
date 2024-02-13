import './App.css'
import { Counter } from './components/Counter/Counter'
import { List } from './components/List/List'

function App() {
  return (
      <div>
      <section>
        <h2>Counter</h2>
        <Counter />
      </section>

      <section>
        <h2>Article List</h2>
        <List />
      </section>
      </div>
  )
}

export default App
