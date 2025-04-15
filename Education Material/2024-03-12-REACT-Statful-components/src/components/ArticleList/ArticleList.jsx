import { useState } from 'react'
import { articles } from './articles.json'

export function ArticleList() {
    const [filters, setFilters] = useState({
        title: "",
        author: "",
    })

    const filteredArticles = articles.filter((article) => {
        if (filters.title === "" && filters.author === "") {
            return true
        }

        if (
            filters.title !== "" ? article.title.includes(filters.title) : false
                || filters.author !== "" ? article.author.username.includes(filters.author) : false
        ) {
            return true
        } else {
            return false
        }
    })

    function updateFilter(field, newValue) {

        setFilters((previousFilters) => {
            // Here we creating a new object rather than modifying the current one
            const newFilter = {
                ...previousFilters,
                [field]: newValue
            }

            return newFilter
        })
    }

    return (
        <div>
            <input
                type="text"
                onChange={(event) => updateFilter("title", event.target.value)}
                value={filters.title}
                placeholder='title'
            />
            <input
                type="text"
                onChange={(event) => updateFilter("author", event.target.value)}
                value={filters.author}
                placeholder='author'
            />
            <ul>
                {filteredArticles.map((article) => {
                    return (
                        <li key={article.slug}>
                            {article.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
