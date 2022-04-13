import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, setPersistence, inMemoryPersistence } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDcZva4xZxgr6hLIItE9btTJU6ew-0s8Rw",
  authDomain: "nextproject-249dd.firebaseapp.com",
  databaseURL: "https://nextproject-249dd-default-rtdb.firebaseio.com",
  projectId: "nextproject-249dd",
  storageBucket: "nextproject-249dd.appspot.com",
  messagingSenderId: "273618991090",
  appId: "1:273618991090:web:1a52865500f8315358dd6b"
};


const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

setPersistence(auth, inMemoryPersistence)
  .then(() => {
    const provider = new GoogleAuthProvider();
    return signInWithRedirect(auth, provider);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


export {auth, provider, signInWithPopup, signOut}