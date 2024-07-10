import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getFirestore,
  doc,
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

// let signInUser = (evt) => {
//   evt.preventDefault();


//   signInWithEmailAndPassword(auth, email.value, password.value)
//     .then(async (credentials) => {
//       console.log(credentials);
//      let user = credentials.user
//       var ref = doc(db, "userAuthList", credentials.user.uid);
//       const docSnap = await getDoc(ref);
//       if (docSnap.exists()) {
//         localStorage.setItem(
//           "user-info",
//           JSON.stringify({
//             fullname: docSnap.data().fullName,
//             Mobile: docSnap.data().Mobile,
//           })
//         );
//         localStorage.setItem("user-creds", JSON.stringify(credentials.user));
//         iziToast.show({
//           title: `Welcome ${fullName.value}`,
//           message: 'Welcome to Aunty Ozy Foodies'
//         });
    
//         setTimeout(() => {
//           window.location.href = "../index.html";
//         }, 5000);
      
//       }
//     })
//     .catch((error) => {
//       console.log(error.code);
//       console.log(error.message);
//     });
// };

async function signInUser(e) {
  e.preventDefault();
  try {
    const credentials = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log(credentials)

  } catch (error) {
    console.log(`check here: ${error.message}`)
  }
}

const googleSignin = async () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const user = result.user;

      window.localStorage.setItem("fullname", user.displayName);
      window.localStorage.setItem("email", user.email);
      window.localStorage.setItem("metadata", user.metadata);
      window.localStorage.setItem("mobile", user.phoneNumber);
      window.localStorage.setItem("photo", user.photoURL);


      iziToast.show({
        title: `Welcome ${user.displayName}`,
        message: 'Welcome to Aunty Ozy Foodies'
      });
      setTimeout(() => {

        
        window.location.href = "../index.html";
      }, 5000);

    })
    .catch((error) => {
      console.log("check here", error.code);
      console.log(error.message);
    });
};

const userSignOut = async () => {
  signOut(auth)
    .then(() => {
      alert("signout is successful");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

let googleadd = document.getElementById("googleRegister")
googleadd.addEventListener("click", googleSignin);
Form1.addEventListener("click", signInUser)