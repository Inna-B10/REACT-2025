import { Link, useParams } from "react-router-dom";
import {articles} from '../articles.json'

export function Article() {
  const {slug} = useParams();
  console.log(slug)

  const article = articles.find((article) => article.slug === slug)

  if (!article) {
    /** Navigate to not found page */
    return 
  }

  return (
    <main>
      <Link to="/articles">Back</Link>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </main>
  )
}
