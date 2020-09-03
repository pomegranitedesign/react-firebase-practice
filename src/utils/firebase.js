import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDXPRZ0AdSoLNHKlXYzeyy3giAQwxLJKwk',
	authDomain: 'practiceone-b1016.firebaseapp.com',
	databaseURL: 'https://practiceone-b1016.firebaseio.com',
	projectId: 'practiceone-b1016',
	storageBucket: 'practiceone-b1016.appspot.com',
	messagingSenderId: '22469896895',
	appId: '1:22469896895:web:8ada7a5b11675c714a340a',
	measurementId: 'G-ZNV1SDP4BX'
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export const firebaseTimestamp = firebase.firestore.FieldValue.serverTimestamp
export const carsCollection = db.collection('cars')

export default firebase
