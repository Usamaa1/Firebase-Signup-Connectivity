// Import the functions you need from the SDKs you need
// import { initializeApp } from "./firebase/app";
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getFirestore, collection, addDoc, getDocs } from "./firebase/firestore"; 
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3bDkqp2xDb8VaXrMDWCfGOXamQyweOZc",
  authDomain: "signup-2391f.firebaseapp.com",
  projectId: "signup-2391f",
  storageBucket: "signup-2391f.appspot.com",
  messagingSenderId: "1041167012523",
  appId: "1:1041167012523:web:4b5cca5f7f4a0fee0c1dee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// console.log(app);
const db = getFirestore(app);

let signupForm = document.getElementById('signup');

 signupForm.addEventListener('submit',async function(e) {

  e.preventDefault();

  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let city = document.getElementById('city').value;
  let country = document.getElementById('country').value;





  try {
    const docRef = await addDoc(collection(db, "signup"), {
      username: username,
      password: password,
      city: city,
      country: country
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});






const querySnapshot = await getDocs(collection(db, "signup"));
querySnapshot.forEach((doc) => {
  // console.log(`${doc.id} `);
  console.log(doc.data().born);
});