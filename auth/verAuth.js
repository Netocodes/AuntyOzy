import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
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

let email = document.getElementById('logEmail');
let password = document.getElementById('logPass');
const Form1 = document.getElementById("registerForm1");
const submit = document.getElementById("btn");


const checkbox = document.getElementById('remember-me');
  checkbox.addEventListener('click', (event) => {
    event.stopPropagation();
  });
 

async function login(e) {
  e.preventDefault();
      try {
    const credentials = await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log(credentials)
    var ref = doc(db, "userAuthList", credentials.user.uid);
           const docSnap = await getDoc(ref);
           if (docSnap.exists()) {
            const userInfo = docSnap.data();
            localStorage.setItem("user-info", JSON.stringify(userInfo));
            }
            localStorage.setItem("user-creds", JSON.stringify(credentials.user));

            const users = JSON.parse( localStorage.getItem("user-info"))
           
            iziToast.show({
                     title: `Welcome ${users.fullname}`,
                     message: 'Welcome to Aunty Ozy Foodies',
                     position: 'topRight',
                     animateInside: true,
                     drag: true,
                     pauseOnHover: true,
                   });
                  
                   setTimeout(() => {
                     window.location.href = "../index.html";
                   }, 5000);
  } catch (error) {
    console.log(error.message)
  }
}

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




let googleadd = document.getElementById("googleRegister")
googleadd.addEventListener("click", googleSignin);
Form1.addEventListener("click", login)