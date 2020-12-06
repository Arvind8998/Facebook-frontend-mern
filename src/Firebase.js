import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZDyARsVyxJA-A_iUE-XYz9UOnpplqr7g",
  authDomain: "facebook-mern-33c81.firebaseapp.com",
  projectId: "facebook-mern-33c81",
  storageBucket: "facebook-mern-33c81.appspot.com",
  messagingSenderId: "352895178012",
  appId: "1:352895178012:web:aa5c825859685358a5d6d9",
  measurementId: "G-QTEF2NXFC5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db