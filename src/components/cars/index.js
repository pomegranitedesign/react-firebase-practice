import React, { useState, useEffect, Fragment } from 'react'
import { carsCollection } from '../../utils/firebase'
import { firebaseLooper } from '../../utils/tools'

const Cars = () => {
	const [ cars, setCars ] = useState(null)
	const [ start, setStart ] = useState(0)
	const [ end, setEnd ] = useState(2999)

	const sortResults = (values = []) => {
		setStart(values[0])
		setEnd(values[1])
	}

	useEffect(
		() => {
			const getAllCars = () =>
				carsCollection
					.orderBy('price')
					.startAt(start)
					.endAt(end)
					.get()
					.then((snapshot) => setCars(firebaseLooper(snapshot)))
					.catch((error) => console.error('error:', error))

			getAllCars()
		},
		[ start, end ]
	)

	const handleCarsData = (cars) =>
		cars ? (
			cars.map((car) => (
				<tr key={car.id}>
					<td>{car.id}</td>
					<td>{car.brand}</td>
					<td>{car.color}</td>
					<td>{car.price}</td>
					<td>{car.available ? 'Available' : 'N/A'}</td>
				</tr>
			))
		) : (
			<tr>
				<td>No Cars Available</td>
			</tr>
		)

	console.log('cars:', cars)

	return (
		<Fragment>
			{/* <Form />
			<hr /> */}
			<button onClick={() => sortResults([ 0, 9999999999 ])}>All</button>
			<button onClick={() => sortResults([ 0, 2999 ])}>0 - 2999</button>
			<button onClick={() => sortResults([ 3000, 3999 ])}>
				3000 - 3999
			</button>
			<button onClick={() => sortResults([ 4000, 4999 ])}>
				4000 - 4999
			</button>
			<button onClick={() => sortResults([ 5000, 5999 ])}>
				5000 - 5999
			</button>
			<button onClick={() => sortResults([ 6000, 6999 ])}>
				6000 - 6999
			</button>
			<table className="table table-dark">
				<thead>
					<tr>
						<th>ID</th>
						<th>Brand</th>
						<th>Color</th>
						<th>Price</th>
						<th>Availability</th>
						<th>Created At</th>
					</tr>
				</thead>
				<tbody>{handleCarsData(cars)}</tbody>
			</table>
		</Fragment>
	)
}

export default Cars
