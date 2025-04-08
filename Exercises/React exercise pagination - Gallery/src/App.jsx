import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useFetch } from './hooks/useFetch'

// const URL =
// 	'https://api.unsplash.com/photos/?client_id=SIQfDKJYnbp4Shm0UYYvK4f7MWoVz8eH2bucTgAvdU4'

function App() {
	const [currentImages, setCurrentImages] = useState(null)
	const [pageCount, setPageCount] = useState(0)
	const [imagesOffset, setImagesOffset] = useState(0)

	const { data, error, isLoading } = useFetch(
		`https://api.unsplash.com/photos/?client_id=SIQfDKJYnbp4Shm0UYYvK4f7MWoVz8eH2bucTgAvdU4&per_page=30`
	)

	useEffect(() => {
		const endOffset = imagesOffset + 8
		setCurrentImages(data.slice(imagesOffset, endOffset))
		setPageCount(Math.ceil(data.length / 8))
	}, [data, imagesOffset])

	const handlePageClick = (event) => {
		const newOffset = (event.selected * 8) % data.length
		setImagesOffset(newOffset)
	}

	return (
		<>
			<h1>Landing page</h1>
			<div>
				{isLoading ? (
					'Loading data'
				) : (
					<section>
						{error ? (
							'failed fetching data'
						) : !currentImages ? (
							'Kunne ikke hente database from API'
						) : (
							<>
								{/* <FilterBedrifts data={data} /> */}
								<div className='App'>
									{currentImages?.map((image, i) => {
										return (
											<div className='img-wrapper' key={i}>
												<img
													src={image?.urls?.thumb}
													alt={image.alt_description}
												/>
											</div>
										)
									})}
								</div>
								<div className='pagination'>
									<ReactPaginate
										breakLabel='...'
										nextLabel='next >'
										onPageChange={handlePageClick}
										pageRangeDisplayed={5}
										pageCount={pageCount}
										previousLabel='< previous'
										renderOnZeroPageCount={null}
										breakClassName={'page-item'}
										breakLinkClassName={'page-link'}
										containerClassName={'pagination'}
										pageClassName={'page-item'}
										pageLinkClassName={'page-link'}
										previousClassName={'page-item'}
										previousLinkClassName={'page-link'}
										nextClassName={'page-item'}
										nextLinkClassName={'page-link'}
										activeClassName={'active'}
									/>
								</div>
							</>
						)}
					</section>
				)}
			</div>
		</>
	)
}

export default App
