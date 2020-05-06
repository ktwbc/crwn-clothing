import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBjrR0oTer3ESspG_OWcATo7zOYscVwtcQ",
  authDomain: "crwn-clothing-bc211.firebaseapp.com",
  databaseURL: "https://crwn-clothing-bc211.firebaseio.com",
  projectId: "crwn-clothing-bc211",
  storageBucket: "crwn-clothing-bc211.appspot.com",
  messagingSenderId: "94389148474",
  appId: "1:94389148474:web:da949edd710cc299190e03"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore  = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


