import { Logo } from "./components/Logo"
import { Greeting } from './components/Greeting'
import { GreetingName } from "./components/GreetingName"
import { Container } from './components/Container'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>React Components</h1>
      </header>

      <main className="main">
        <section>
          <h2>Static Components</h2>
          <Logo />
        </section>

        <section>
          <h2>JavaScript in React Components</h2>
          <Greeting />
        </section>

        <section>
          <h2>Arguments to React Components</h2>
          <GreetingName firstName="Lars" middleName="Gunnar" />
          <GreetingName firstName="Tord" />
        </section>

        <section>
          <h2>Container React Components</h2>
          <Container>
            <p>Hello World</p>
            <p>Hello World</p>
            <p>Hello World</p>
          </Container>
        </section>
      </main>

      <footer className="footer">
        <p>Kodehodet</p>
        <p>Modul D</p>
      </footer>
    </div>
  )
}

export default App
