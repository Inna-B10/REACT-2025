import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Layout } from './pages/Layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/about/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* path blir her parent route + this path => "/" + "about" = "/about" */}
          <Route path='about' element={<AboutPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
