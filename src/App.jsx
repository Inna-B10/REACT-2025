import { Counter } from "./componets/counter/Counter"
import { StoreCounter } from './componets/storeCounter/StoreCounter'
import { UserContextProvider } from "./contexts/UserContext/UserContext"
import { UserDisplay } from "./componets/UserDisplay/UserDisplay"
import { UserDisplayStore } from './componets/UserDisplayStore/UserDisplayStore'

function App() {
  return (
    <UserContextProvider>
      <div>
        <header>
          <h1>Advanced State Managment</h1>

          <div>
            <p>Store</p>
            <UserDisplayStore />
          </div>

          <div>
            <p>Use State</p>
            <UserDisplay />
          </div>
        </header>

        <main>
          <section>
            <h2>Use State Counter</h2>
            <Counter />
            <Counter />
          </section>

          <section>
            <h2>Use Store Counter</h2>
            <StoreCounter />
            <StoreCounter />
          </section>
        </main>
      </div>
    </UserContextProvider>
  )
}

export default App
