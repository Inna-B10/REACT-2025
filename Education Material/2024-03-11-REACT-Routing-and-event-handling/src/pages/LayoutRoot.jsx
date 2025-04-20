import { Outlet, NavLink } from "react-router-dom"

export function LayoutRoot() {
  return (
    <div>
      <header>
        <p>Routing</p>

        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({isActive}) => isActive ? "active" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({isActive}) => isActive ? "active" : ""}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/articles"
                className={({isActive}) => isActive ? "active" : ""}
              >
                Articles
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div>
        {/* All subpages will replace this Outlet component */}
        <Outlet />
      </div>

      <footer>
        <p>Module D</p>
      </footer>
    </div>
  )
}
