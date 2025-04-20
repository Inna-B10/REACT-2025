export function LandingPage() {
  return (
    <main>
      <nav>
        <ul>
          <li><a href="#hero">Hero</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </nav>

      <section style={{height: "100vh", backgroundColor: "cornflowerblue"}} id="hero">
        <h1>LandingPage</h1>
      </section>

      <section style={{height: "100vh"}} id="skills">
        <h2>Skills</h2>
      </section>
    </main>
  )
}
