import React, { useState, useEffect } from 'react'
import firebase, {
	carsCollection,
	firebaseTimestamp
} from '../../utils/firebase'

const Form = (props) => {
	const [ brand, setBrand ] = useState('')
	const [ color, setColor ] = useState('')
	const [ price, setPrice ] = useState(0)
	const [ available, setAvailable ] = useState(false)

	useEffect(() => {
		carsCollection.doc('6nhpl5KXtbs4kkvHq8e6').update({
			tags: firebase.firestore.FieldValue.arrayRemove('Amazing')
		})
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()

		// Add a new car
		carsCollection
			.doc('this')
			.set({
				brand,
				color,
				price,
				available,
				createdAt: firebaseTimestamp(),
				dealers: {
					virginia: true,
					washington: false,
					toronto: true,
					california: true,
					almaty: false
				},
				tags: [ 'Good', 'Affordable', 'Inexpensive' ]
			})
			.then((data) => console.log('data:', data))
			.catch((err) => console.error('err:', err))
		clearFields()
	}

	const clearFields = () => {
		setBrand('')
		setColor('')
		setPrice(0)
		setAvailable(false)
	}

	return (
		<form onSubmit={handleSubmit} className="form">
			<div className="form-group">
				<label>Brand</label>
				<input
					className="form-control"
					type="text"
					placeholder="Brand"
					name="brand"
					onChange={(event) => setBrand(event.target.value)}
					value={brand}
				/>
			</div>
			<div className="form-group">
				<label>Color</label>
				<input
					className="form-control"
					type="text"
					placeholder="Color"
					name="color"
					onChange={(event) => setColor(event.target.value)}
					value={color}
				/>
			</div>
			<div className="form-group">
				<label>Price</label>
				<input
					className="form-control"
					type="number"
					placeholder="Price"
					name="price"
					onChange={(event) => setPrice(event.target.value)}
					value={price}
				/>
			</div>
			<div className="form-group">
				<label>Available?</label>
				<select
					className="form-control"
					name="available"
					onChange={(event) => setAvailable(event.target.value)}
				>
					<option value="true">Available</option>
					<option value="false">Not Available</option>
				</select>
			</div>
			<button type="submit" className="btn btn-primary">
				Add Car
			</button>
		</form>
	)
}

export default Form
