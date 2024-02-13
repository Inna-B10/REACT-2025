import { useState } from "react";
import { articleResponse, articleTags } from "./posts";

// En lit hacky måte å hente ut typen til en enkelt artikkel
/**
 * Et Artikkel objekt
 * 
 * @typedef {typeof articleResponse.articles[0]} Article
 */

/**
 * En liste over artikler med søkefelt og tag filtrering
 */
export function List() {
  // Tilstander vi trenger å holde rede på
  const [searchTerm, setSearchTerm] = useState("")
  const [tagFilter, setTagFilter] = useState("")

  // Deriverte tilstander (verdier/variabler vi kan beregne basert på det vi allered har)
  const filterdList = articleResponse.articles
    .filter((article) => tagFilter === "" ? true : article.tagList.includes(tagFilter))
    .filter((article) => customArticleFilter(article, searchTerm.toLowerCase()))

  return (
    <div>
      <div className="p-1 flex justify-center gap-1">
        <input className="bg-neutral-100 border border-neutral-200 shadow-sm rounded-l-full pl-4 py-1" placeholder="Search.." type="text" onChange={(event) => setSearchTerm(event.target.value.toLowerCase())} />

        <select defaultValue="" className="bg-neutral-100 border border-neutral-200 shadow-sm rounded-r-full pr-4 py-1" onChange={(event) => setTagFilter(event.target.value)}>
          <option value="">
            unset
          </option>

          {articleTags.map((tag) => {
            return (
              <option key={tag} value={tag}>
                {tag}
              </option>
            )
          })}
        </select>
      </div>

      <ul className="flex flex-col gap-4 py-4 transition-all">
        {filterdList.map((article) => {
          return (
            <li key={article.slug} className="border-b pb-4 pt-2 shadow-sm">
              <ArticleCard article={article} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/**
 * En enkelt artikkel
 * 
 * @param {{
 *  article: Article
 * }} props 
 * @returns 
 */
function ArticleCard(props) {
  return (
    <article className="flex flex-col gap-4 px-4 mx-auto max-w-2xl">
      <header>
        <h2 className="underline text-lg font-semibold">
          {props.article.title}
        </h2>
      </header>

      <section>
        <p className="max-w-xl">{props.article.description}</p>
      </section>

      <footer className="flex justify-between items-end">
        <p>Author: <span className="italic font-light">{props.article.author.username}</span></p>
        <div className="text-xs flex flex-col">
          <p className="flex grow gap-2 justify-between">Authored: <span>{new Date(props.article.createdAt).toLocaleDateString()}</span></p>
          <p className="flex grow gap-2 justify-between">Updated: <span>{new Date(props.article.updatedAt).toLocaleDateString()}</span></p>
        </div>
      </footer>
    </article>
  )
}

/**
 * Funksjon for å finne ut om en artikkel inneholder
 * søke strengen
 * 
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
