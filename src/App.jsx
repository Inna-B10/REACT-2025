import { Counter } from './components/Counter/Counter'
import { Layout } from './components/Layout/Layout'
import { List } from './components/List/List'

function App() {
  return (
    <Layout>
      <section>
        <h2>Counter</h2>
        <Counter />
      </section>

      <section>
        <h2>Article List</h2>
        <List />
      </section>
    </Layout>
  )
}

export default App
