import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
    getFirestore,
    doc,
    getDoc,
  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyC2RfOXZsAx7U2h14TcCiyfrWE1qb2cFZk",
  authDomain: "auntyozy.firebaseapp.com",
  projectId: "auntyozy",
  storageBucket: "auntyozy.appspot.com",
  messagingSenderId: "129759775948",
  appId: "1:129759775948:web:259af11e93f8bfa800c669",
  measurementId: "G-3RYCDM5KFJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

let getName = document.getElementById("getname")
let getImg = document.getElementById("getImg")
let loggedIn = document.getElementById("loggedIn")
let notLoggedIn = document.getElementById("notLoggedIn")
let signout  = document.getElementById("signoutBtn")


signout.addEventListener('click', (e) => {
    signOut(auth).then(() => {
        console.log("Sign-out successful.")
      }).catch((error) => {
       console.log(error.message)
      });
})







window.addEventListener('DOMContentLoaded', () => {

 onAuthStateChanged(auth, (user) => {
   if (user) {
 notLoggedIn.style.display = 'none'
 loggedIn.style.display ="flex"
//  let parsed = localStorage.getItem(userInfo.fullname)
//  let newParse = JSON.parse(parsed)
//  console.log(newParse)
     const mainName = user.displayName;
     const photo = user.photoURL
     getName.innerText = mainName
     getImg.src = photo

     console.log(user)
   } else {
     notLoggedIn.style.display = 'flex'
 loggedIn.style.display ="none"
   }
 });
})

