import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const Pokemon = ({ pokemon }) => {
	const { name } = pokemon
	const url = 'https://pokeapi.co/api/v2/pokemon/' + name

	const { data, error } = useSWR(url, fetcher)

	if (error) return <h1>Something went wrong!</h1>
	if (!data) return <h1>Loading...</h1>

	return (
		<div className='Card'>
			<span className='Card--id'>#{data.id}</span>
			<img
				className='Card--image'
				src={data.sprites.front_default}
				alt={name}
			/>
			<h1 className='Card--name'>{name}</h1>
			<span className='Card--details'>
				{data.types.map((poke) => poke.type.name).join(', ')}
			</span>
		</div>
	)
}
