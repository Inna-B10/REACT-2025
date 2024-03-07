import styles from './App.module.css'
import { ArticleList } from './components/ArticlesList/ArticleList'

console.log(styles)

function App() {
  const name = "Lars"

  return (
    <>
      <h1>Hello {name}</h1>
      <ArticleList />
    </>
  )
}

export default App
