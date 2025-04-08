import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './MovieCard.jsx'
import SearchIcon from '/search.svg'
//http://www.omdbapi.com/?apikey=c01f5af2

const API_URL = 'http://www.omdbapi.com/?apikey=c01f5af2'

const App = () => {
	const [movies, setMovies] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`)
		const data = await response.json()
		setMovies(data.Search)
		console.log(data.Search)
	}
	useEffect(() => {
		searchMovies('Spiderman')
	}, [])
	return (
		<div className='app'>
			<h1>MovieLand</h1>
			<div className='search'>
				<input
					placeholder='Search for movies'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<img
					src={SearchIcon}
					alt='search icon'
					onClick={() => searchMovies(searchTerm)}
				/>
			</div>
			{movies?.length > 0 ? (
				<div className='container'>
					{/*[X]					{movies.map((movie, index) => {}*/}
					{movies.map((movie, index) => (
						<MovieCard movie={movie} key={index} />
					))}
				</div>
			) : (
				<div className='empty'>
					<h2>No movies found</h2>
				</div>
			)}
		</div>
	)
}

export default App
