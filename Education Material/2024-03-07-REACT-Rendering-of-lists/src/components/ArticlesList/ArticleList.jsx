import articles from './articles.json'
import fsdafasdfs from './ArticleList.module.css'
console.log(fsdafasdfs)

export function ArticleList() {
  return (
    <ul className={fsdafasdfs.list}>
      {
        articles.articles.map((article) => {
          return (
              <li key={article.slug}>
                <article>
                  <h2>{article.title}</h2>
                  <p>{article.body}</p>
                </article>
              </li>
          )
        })
      }
    </ul>
  )
}
