/* ------------------------------------ 2 ----------------------------------- */
import { useState } from 'react'

export default function ListGroup(arr) {
	//console.log({ props: arr })
	const [selectedIndex, setSelectedIndex] = useState(-1)
	return (
		<>
			<h1>{arr.heading}</h1>
			{arr.items.length === 0 && <p>No item found</p>}
			<ul className='list-group'>
				{arr.items.map((city, index) => (
					<li
						className={
							selectedIndex === index
								? 'list-group-item active'
								: 'list-group-item'
						}
						key={city}
						onClick={() => {
							setSelectedIndex(index)
							// console.log(index)
							arr.onSelectItem(city)
						}}>
						{city}
					</li>
				))}
			</ul>
		</>
	)
}
