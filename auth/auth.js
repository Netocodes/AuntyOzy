
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
  import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyC2RfOXZsAx7U2h14TcCiyfrWE1qb2cFZk",
    authDomain: "auntyozy.firebaseapp.com",
    projectId: "auntyozy",
    storageBucket: "auntyozy.appspot.com",
    messagingSenderId: "129759775948",
    appId: "1:129759775948:web:259af11e93f8bfa800c669",
    measurementId: "G-3RYCDM5KFJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  

  const fullName = document.getElementById("fullname");
  const Email = document.getElementById("email");
const Mobile = document.getElementById("mobile");
const passWord = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");
const Form = document.getElementById("registerForm");
const submit = document.getElementById("btn")

  let RegisterUser = evt =>{
    evt.preventDefault()

    createUserWithEmailAndPassword(auth, Email.value, passWord.value)
    .then(async(credentials) => {
      console.log(credentials)
      const userRef = doc(db, "userAuthList", credentials.user.uid);
      
      await setDoc(userRef, {
        fullname: fullName.value,
        email: Email.value,
        mobile: Mobile.value,
        password:passWord.value
      });
 

      window.location.href = 'login.html'

    })
    .catch((error) =>{
      alert(error.message)
      console.log(error.code)          
      console.log(error.message)          

    })
  }
  Form.addEventListener('submit', RegisterUser)
//   submit.addEventListener("click", () => {
//     Swal.fire({
// title: "Registration Complete",

// icon: "success"
// });
//   });
