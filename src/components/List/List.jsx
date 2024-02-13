import { useState } from "react";
import { articleResponse } from "./posts";

// Denne fungerer ikke som den skal
const tags = articleResponse.articles
  .reduce((tagList, article) => [...tagList, ...article.tagList], [])
  .filter((item, i, array) => array.indexOf(item) === array.lastIndexOf(item))

/**
 * @typedef {typeof articleResponse.articles[0]} Article
 */


export function List() {
  // Tilstander vi trenger å holde rede på
  const [searchTerm, setSearchTerm] = useState("")
  const [tagFilter, setTagFilter] = useState("at")

  // Deriverte tilstander (verdier/variabler vi kan beregne basert på det vi allered har)
  const filterdList = articleResponse.articles
    .filter((article) => article.tagList.includes(tagFilter))
    .filter((article) => customArticleFilter(article, searchTerm.toLowerCase()))

  return (
    <div>
      <input type="text" onChange={(event) => setSearchTerm(event.target.value.toLowerCase())} />

      <select onChange={(event) => setTagFilter(event.target.value)}>
        {tags.map((tag) => {
          return (
            <option key={tag} value={tag}>
              {tag}
            </option>
          )
        })}
      </select>

      <ul>
        {filterdList.map((article) => {
          return (
            <li key={article.slug}>
              <ArticleCard article={article} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/**
 * 
 * @param {{
 *  article: Article
 * }} props 
 * @returns 
 */
function ArticleCard(props) {
  return (
    <article>
      <h2>
        {props.article.title}
      </h2>
      <p>{props.article.description}</p>
    </article>
  )
}

/**
 * @param {Article} article 
 * @param {string} searchTerm 
 */
function customArticleFilter(article, searchTerm) {
  if (
    article.title.toLowerCase().includes(searchTerm) ||
    article.author.username.toLowerCase().includes(searchTerm)
  ) {
    return true
  } else {
    return false
  }
}
