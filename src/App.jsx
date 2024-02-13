import { Counter } from "./components/Counter/Counter";
import { Layout } from "./components/Layout/Layout";
import { List } from "./components/List/List";

function App() {
  return (
    <Layout>
      <section className="flex flex-col gap-4 py-8 border-b">
        <h2 className="text-2xl font-bold text-center underline">Counter</h2>
        <div className="flex justify-center gap-4">
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </div>
      </section>

      <section className="flex flex-col gap-4 py-8 border-b">
        <h2 className="text-2xl font-bold text-center underline">
          Article List
        </h2>
        <List />
      </section>
    </Layout>
  );
}

export default App;
