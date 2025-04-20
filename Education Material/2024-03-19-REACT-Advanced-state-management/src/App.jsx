import { Counter } from "./componets/counter/Counter";
import { StoreCounter } from "./componets/storeCounter/StoreCounter";
import { UserContextProvider } from "./contexts/UserContext/UserContext";
import { UserDisplay } from "./componets/UserDisplay/UserDisplay";
import { UserDisplayStore } from "./componets/UserDisplayStore/UserDisplayStore";

function App() {
  return (
    <UserContextProvider>
      <div className="flex flex-col min-h-screen">
        <header className="flex justify-between p-md">
          <h1>Advanced State Managment</h1>

          <div className="flex gap-lg">
            <div>
              <p>Store</p>
              <UserDisplayStore />
            </div>

            <div>
              <p>Use State</p>
              <UserDisplay />
            </div>
          </div>
        </header>

        <main className="grow mx-auto flex flex-col gap-lg">
          <section>
            <h2>Use State Counter</h2>
            <div className="flex justify-between">
              <Counter />
              <Counter />
            </div>
          </section>

          <section>
            <h2>Use Store Counter</h2>
            <div className="flex justify-between">
              <StoreCounter />
              <StoreCounter />
            </div>
          </section>
        </main>

        <footer className="px-md py-lg">
          <p className="text-center">Modul D</p>
          <p className="text-center">Jobloop</p>
        </footer>
      </div>
    </UserContextProvider>
  );
}

export default App;
