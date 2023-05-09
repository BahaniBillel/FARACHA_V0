// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSsMpZ8GXL4zvWhkE5xEss_JQPX1IJ8Lg",
  authDomain: "faracha-b3825.firebaseapp.com",
  projectId: "faracha-b3825",
  storageBucket: "faracha-b3825.appspot.com",
  messagingSenderId: "296206124748",
  appId: "1:296206124748:web:9642b9afab366679ad6469",
  measurementId: "G-67BR5QWFY2",
};

// Initialize Cloud Firestore and get a reference to the service
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage };
