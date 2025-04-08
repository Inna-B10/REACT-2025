/* ------------------------------------ 4 ----------------------------------- */
// const Button = (arr) => {
// 	console.log(arr)
// 	return (
// 		<button
// 			className={'btn btn-' + arr.color}
// 			onClick={() => {
// 				arr.onSelect(arr.children)
// 			}}>
// 			{arr.children}
// 		</button>
// 	)
// }
//
// export default Button

/* ------------------------------------ 5 ----------------------------------- */
const Button = (arr) => {
	//console.log(arr)
	return (
		<button
			className={'btn btn-' + arr.color}
			onClick={() => {
				arr.openAlert()
			}}>
			{arr.children}
		</button>
	)
}

export default Button
