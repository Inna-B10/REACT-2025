/* ------------------------------------ 3 ----------------------------------- */
// const Alert = (arr) => {
// 	//console.log(arr)
// 	//return <div className='alert alert-primary'>{arr.text}</div>
// 	return <div className='alert alert-primary'>{arr.children}</div>
// }
//
// export default Alert

/* ------------------------------------ 5 ----------------------------------- */
const Alert = (arr) => {
	//console.log(arr)
	return (
		<div className='alert alert-primary alert-dismissible'>
			{arr.children}
			<button
				type='button'
				className='btn-close'
				data-bs-dismiss='alert'
				aria-label='Close'
				onClick={arr.closeAlert}></button>
		</div>
	)
}

export default Alert
