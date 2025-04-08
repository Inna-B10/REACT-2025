import { useEffect, useState } from 'react'

export function useFetch(value) {
	const [data, setData] = useState([])
	const [error, setError] = useState(null)
	const isLoading = data === null && error === null

	const URL =
		value === 'kommunerBase'
			? 'https://data.ssb.no/api/klass/v1/versions/1710'
			: value

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(URL)
				const arr = await response.json()
				setData(arr)
				// setData((prevState) => [...arr])

				console.log(arr)
			} catch (error) {
				setError(error)
			}
		}
		setTimeout(fetchData, 1000)
	}, [URL])
	console.log(data)
	return {
		data,
		error,
		isLoading,
	}
}
