import './App.css'
import { ArticleList } from './components/ArticleList/ArticleList'
import { Counter } from './components/Counter/Counter'
import { TextInput } from './components/TextInput/TextInput'


function App() {
  return (
    <div>
      <Counter />
      <TextInput />
      <ArticleList />
    </div >
  )
}

export default App
