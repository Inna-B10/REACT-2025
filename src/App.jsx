import { Counter } from './components/Counter/Counter'
import { Layout } from './components/Layout/Layout'
import { List } from './components/List/List'

function App() {
  return (
    <Layout>
      <section className='border-b py-8 flex flex-col gap-4'>
        <h2 className='text-center text-2xl underline font-bold'>Counter</h2>
        <div className='flex justify-center'>
          <Counter />
        </div>
      </section>

      <section className='border-b py-8 flex flex-col gap-4'>
        <h2 className='text-center text-2xl underline font-bold'>Article List</h2>
        <List />
      </section>
    </Layout>
  )
}

export default App
