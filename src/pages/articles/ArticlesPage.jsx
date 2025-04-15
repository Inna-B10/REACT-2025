import { Link } from 'react-router-dom'
import { articles } from './articles.json'

export function ArticlesPage() {
  return (
    <main>
      <h1>ArticlesPage</h1>

      <ul>
        {articles.map((article) => {
          return (
            <li key={article.slug}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <Link to={`/articles/${article.slug}`}>Read More</Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
