import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBn7pR0VZXMEVzBqgRYzCIXcKdtRRgg6wc',
  authDomain: 'linkedin-clone-33723.firebaseapp.com',
  projectId: 'linkedin-clone-33723',
  storageBucket: 'linkedin-clone-33723.appspot.com',
  messagingSenderId: '835877843085',
  appId: '1:835877843085:web:0bf80ca8202ac491eef2c4',
  measurementId: 'G-HDSNWQHHDX',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
