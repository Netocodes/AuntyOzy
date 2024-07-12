import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
// import { signInWithEmailAndPassword, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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
const provider = new GoogleAuthProvider();

const fullName = document.getElementById("fullname");
const Email = document.getElementById("email");
const passWord = document.getElementById("password");
const Form = document.getElementById("registerForm");
const submit = document.getElementById("btn");
const googleBtn = document.getElementById("googleRegister");
const Mobile = document.getElementById("mobile");



const registerUser = async (event) => {
  event.preventDefault()
  try {
    let credentials = await createUserWithEmailAndPassword(
      auth,
      Email.value,
      passWord.value
    );
   
    console.log(credentials);
    const userRef = doc(db, "userAuthList", credentials.user.uid);
  
    await setDoc(userRef, {
      fullname: fullName.value,
      email: Email.value,
      mobile: Mobile.value,
      password: passWord.value,
    });

    
    iziToast.show({
      title: `Welcome ${fullName.value}`,
      message: 'You have been Registered successfully',
       position: 'topRight',
       animateInside: true,
       drag: true,
       pauseOnHover: true,
    });

    setTimeout(() => {
      window.location.href = "../auth/login.html";
    }, 5000);
  } catch (error) {
    console.log(error.message)
  }
};


const googleSignin = async () => {
  try{
  let googlecred = await signInWithPopup(auth, provider)
  let user = googlecred.user
console.log(googlecred.user.displayName)

const userRef = doc(db, "userAuthList", googlecred.user.uid);
  
    await setDoc(userRef, {
      fullname: googlecred.user.displayName ,
      email: googlecred.user.email ,
      mobile: googlecred.user. phoneNumber,
      photo: googlecred.user.photoURL ,
    });

    iziToast.show({
           title: `Welcome ${user.displayName}`,
           message: 'Welcome to Aunty Ozy Foodies',
           position: 'topRight',
           animateInside: true,
           drag: true,
           pauseOnHover: true,
         });
         setTimeout(() => {
           window.location.href = "../index.html";
         }, 5000);


  }
    catch(error)  {
      console.log("check here", error.message);
      console.log(error.message);
    };
};

// let signOut = () => {
//   localStorage.removeItem("user-creds");
//   localStorage.removeItem("user-info");
//   window.location.href = "login.html";
// };

Form.addEventListener("submit", registerUser);
googleBtn.addEventListener("click", googleSignin);

let iti = document.getElementById("db");
iti.addEventListener('click', () =>{
  iziToast.show({
    title: 'Hey',
    message: 'What would you like to add?'
  });
});

