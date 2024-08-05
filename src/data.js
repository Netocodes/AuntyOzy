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
const firstName = document.getElementById("hs-hero-name-1");
let userInfo;


signout.addEventListener('click', (e) => {
    signOut(auth).then(() => {
      sessionStorage.clear();
      console.log('Local storage cleared');
        console.log("Sign-out successful.")

      }).catch((error) => {
       console.log(error.message)
      });
})


async function getUserInfoFromFirestore(uid) {
  try {
    const docRef = doc(db, "userAuthList", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      return userData
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }
}



onAuthStateChanged(auth, (user) => {
  if (user) {
    
    
    notLoggedIn.style.display = "none"
    loggedIn.style.display ="flex";
    const mainName = "";
          getName.innerText = mainName
        
    // ============================
  
      const uid = user.uid;
      console.log("User is signed in:");
      
      
      getUserInfoFromFirestore(uid).then(userData => {
        if (userData) {
        userInfo = userData;
        const mainName = userData.fullname
        const photo = userData.photo
     firstName.value = userData.fullname
        let ggs = getImg.src = photo
        
        if (ggs === undefined){
          getImg.src = "data:image/png;base64,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"
         
        }
        getName.innerText = mainName
        
         }
       
      }).catch(error => {
        console.error("Error fetching user data:", error);
      });
   
  } else {
    // User is signed out
    notLoggedIn.style.display = 'flex'
     loggedIn.style.display ="none"
    console.log("No user is signed in.");
    document.addEventListener('click', (e) => {
      e.preventDefault()
      window.location.href = "./auth/login.html"
    })
  }
});


