/* <img src='http://4hamsters.freehostia.com/gallery/data/thumbnails/14/Panna ZN-933.jpg'></img> */
/* ------------------------------------ 1 ----------------------------------- */
// const App = () => {
// 	// const name = 'React'
// 	const isName = true
//
// 	return (
// 		<>
// 			<div>Hello {isName ? name : 'world'}!</div>
// 			{name ? (
// 				<h1>{name}</h1>
// 			) : (
// 				<>
// 					<h1>test</h1>
// 					<h2>there is no name</h2>
// 				</>
// 			)}
// 		</>
// 	)
// }
// export default App

/* ----------------------------------- 1.1 ---------------------------------- */
// const Person = (props) => {
// 	return (
// 		<>
// 			<h1>name: {props.name}</h1>
// 			<h2>last name: {props.lastName}</h2>
// 			<h2>age: {props.age}</h2>
// 		</>
// 	)
// }
// //? is it the same
// // function App() {return (   ------>   //const App = () => { return (
//
// const App = () => {
// 	return (
// 		<>
// 			<Person name={'Jane'} lastName={'Doe'} age={30} />
// 			<Person name='John' lastName='Smith' age={30 + 5} />
// 			{/*only string can be used without {}*/}
// 		</>
// 	)
// }
// export default App

/* ----------------------------------- 1.2 ---------------------------------- */
// import { useEffect, useState } from 'react'
// const App = () => {
// 	const [counter, setCounter] = useState(-5)
// 	useEffect(() => {
// 		alert('you have changed the counter to' + counter)
// 	}, [counter])
// 	return (
// 		<>
// 			<button onClick={() => setCounter(counter - 1)}>-</button>
// 			<h1>{counter}</h1>
// 			<button onClick={() => setCounter((prevCount) => prevCount + 1)}>
// 				+
// 			</button>
// 		</>
// 	)
// }
// export default App

/* ------------------------------------ 2 ----------------------------------- */
// import ListGroup from './components/ListGroup'
//
// function App() {
// 	const cities = ['New York', 'London', 'Tokyo', 'Paris']
// 	const handleSelectItem = (item) => console.log(item)
// 	return (
// 		<>
// 			<ListGroup
// 				items={cities}
// 				heading={'Cities'}
// 				onSelectItem={handleSelectItem}
// 			/>
// 		</>
// 	)
// }
//
// export default App

/* ------------------------------------ 3 ----------------------------------- */
// import Alert from './components/Alert'
// function App() {
// 	return (
// 		<div>
// 			<Alert>
// 				Hello{' '}
// 				<i>
// 					<b>world</b>
// 				</i>
// 			</Alert>
// 			<Alert>Good day</Alert>
// 			{/* {<Alert text='Hello world' />
// 			<Alert text='Good day' />} */}
// 		</div>
// 	)
// }
//
// export default App

/* ------------------------------------ 4 ----------------------------------- */
// import Button from './components/Button'
// function onClick(text) {
// 	return console.log(text)
// }
// const color = 'secondary'
// const App = () => {
// 	return (
// 		<div>
// 			<Button
// 				color={color}
// 				onSelect={() => {
// 					onClick('home')
// 				}}>
// 				Home
// 			</Button>
// 			{/* <Button onSelect={(text) => console.log(text)}>About</Button> */}
// 			<Button
// 				color='primary'
// 				onSelect={() => {
// 					onClick('about')
// 				}}>
// 				About
// 			</Button>
// 		</div>
// 	)
// }
//
// export default App
/* ------------------------------------ 5 ----------------------------------- */

import { useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'
// function onClick(text) {
// 	return console.log(text)
// }

const App = () => {
  const [alertVisible, setAlertVisible] = useState(false)
  return (
    <div>
      {alertVisible && (
        <Alert closeAlert={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color='primary' openAlert={() => setAlertVisible(true)}>
        My button
      </Button>
    </div>
  )
}

export default App
