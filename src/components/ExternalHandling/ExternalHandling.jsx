import { getAllArticles } from '../../articlesApi/getAllArticles'

export function ExternalHandling() {
	function handleClick() {
		const articles = getAllArticles()

		console.log(articles)
	}

	return <button onClick={handleClick}>CLick Me</button>
}
