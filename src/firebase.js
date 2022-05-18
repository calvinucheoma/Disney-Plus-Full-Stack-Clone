import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEmxqF3JUjeEq0YaBUBcxuWklOmjhuSOQ",
  authDomain: "disney-plus-full-stack-clone.firebaseapp.com",
  projectId: "disney-plus-full-stack-clone",
  storageBucket: "disney-plus-full-stack-clone.appspot.com",
  messagingSenderId: "612795259683",
  appId: "1:612795259683:web:9a87152b65a245c2668a96"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth();

const provider = new GoogleAuthProvider();

const storage = getStorage(firebaseApp);

export {auth, provider, storage};

export default db;

