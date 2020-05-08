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

export const createUserProfileDocument  = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log(userRef);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (error) {
      console.log('error creating user', error);
    }
  }
  return userRef;
}



export const auth = firebase.auth();
export const firestore  = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


