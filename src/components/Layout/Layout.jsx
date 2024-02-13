import { useState } from "react"

/**
 * @param {{
 * children: React.ReactNode
 * }} properties
 */
export function Layout(properties) {
  const [user, setUser] = useState(null)

  console.log(user)

  function signin() {
    // Send messages to the backend

    const username = prompt("Username")

    const password = prompt("Pasword")

    if (!username || !password) {
      return
    }

    // Finaly set user
    setUser({
      name: username,
    })
  }

  function signout() {
    setUser(null)
  }

  return (
    <div>
      <header>

        {
          user === null ?
            <p>Not Logged In</p> :
            <p>{user.name}</p>
        }

        <button onClick={signin}>Log In</button>
        <button onClick={signout}>Log Out</button>

      </header>

      <main>
        {properties.children}
      </main>

      <footer>
        <p>Modul D</p>
      </footer>
    </div>
  )
}