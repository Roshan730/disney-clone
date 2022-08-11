import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCbraPKwOjnRwN1-NM4tBTfoZdXN4B1aC0",
  authDomain: "disney-clone-a5657.firebaseapp.com",
  projectId: "disney-clone-a5657",
  storageBucket: "disney-clone-a5657.appspot.com",
  messagingSenderId: "318996085088",
  appId: "1:318996085088:web:ea1ce270f379a6a8d24605",
  measurementId: "G-E5X2DF1MYY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };

export default db;
