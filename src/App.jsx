import { useState } from "react"
import { Countdown } from "./components/Countdown/Countdown"
import { useFetch } from "./hooks/useFetch"


function App() {
  const { data, error, isLoading } = useFetch("https://api.realworld.io/api/articles?limit=20")
  const [enableTimer, setEnableTimer] = useState(true)

  return (
    <div>
      <section>
        <h2>CountDown</h2>
        <button onClick={() => setEnableTimer(!enableTimer)}>Hide Timer</button>
        {
          enableTimer ?
            <Countdown time={10} /> :
            <p>Timer hidden</p>
        }
      </section>

      <section>
        <h2>Articles</h2>
        {
          isLoading ?
            <p>Loading...</p> :
            error ?
              <p>Error</p> :
              <ul>
                {
                  data.articles.map((article) => {
                    return (
                      <li key={article.slug}>
                        <ArticleCard article={article} />
                      </li>
                    )
                  })
                }
              </ul>
        }
      </section>
    </div>
  )
}

export default App

/**
 * @typedef {{
 * "slug": string
 * "title": string,
 * "description": string,
 * "body": string,
 * "tagList": string[],
 * "createdAt": string,
 * "updatedAt": string,
 * "favorited": boolean,
 * "favoritesCount": number,
 * "author": {
 *   "username": string,
 *   "bio": string | null,
 *   "image": string,
 *   "following": boolean
 * }
 * }} Article
 */

/**
 * 
 * @param {{
 * article: Article
 * }} props 
 */
function ArticleCard(props) {
  return (
    <article>
      <header>
        {props.article.title}
      </header>
      <p>{props.article.body}</p>
    </article>
  )
}