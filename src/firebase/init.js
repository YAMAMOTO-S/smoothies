import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBsYZuN8kUzEfiR-otsRFTjf0MKU7Q2VTQ",
  authDomain: "udemy-smoothies-29da9.firebaseapp.com",
  databaseURL: "https://udemy-smoothies-29da9.firebaseio.com",
  projectId: "udemy-smoothies-29da9",
  storageBucket: "udemy-smoothies-29da9.appspot.com",
  messagingSenderId: "364812772599",
  appId: "1:364812772599:web:b693a59702878ddd7b5ff2",
  measurementId: "G-73G7RBY2WE"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

 
export default firebaseApp.firestore()