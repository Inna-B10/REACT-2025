import { useState } from "react";

/**
 * @param {{
 * children: React.ReactNode
 * }} properties
 */
export function Layout(properties) {
  const [user, setUser] = useState(null);

  function signin() {
    // Send messages to the backend

    const username = prompt("Username");

    const password = prompt("Pasword");

    if (!username || !password) {
      return;
    }

    // Finaly set user
    setUser({
      name: username,
    });
  }

  function signout() {
    setUser(null);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between p-2 bg-rose-950 text-amber-50 items-center">
        <a href="/">PlaceholderIcon</a>

        <div className="flex items-center gap-4">
          {user === null ? (
            <button
              className="bg-teal-600 hover:bg-teal-500 active:bg-teal-700 px-2 py-1 rounded-md"
              onClick={signin}
            >
              Log In
            </button>
          ) : (
            <>
              <p className="capitalize bg-neutral-400 px-2 py-1 rounded-md">
                {user.name}
              </p>
              <button
                className="bg-teal-600 hover:bg-teal-500 active:bg-teal-700 px-2 py-1 rounded-md"
                onClick={signout}
              >
                Log Out
              </button>
            </>
          )}
        </div>
      </header>

      <main className="flex flex-col gap-4 px-4 grow">
        {properties.children}
      </main>

      <footer className="bg-rose-950 text-amber-50 px-2 py-4">
        <p className="text-center">Modul D</p>
      </footer>
    </div>
  );
}
