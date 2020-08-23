import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyALRRm3fRTs4jXTNkJtoVvkhl49MEb9Uew",
    authDomain: "react-ecommerce-faa99.firebaseapp.com",
    databaseURL: "https://react-ecommerce-faa99.firebaseio.com",
    projectId: "react-ecommerce-faa99",
    storageBucket: "react-ecommerce-faa99.appspot.com",
    messagingSenderId: "218291299092",
    appId: "1:218291299092:web:2832dd7d9847848cb15801"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;