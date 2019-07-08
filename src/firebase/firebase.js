import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config={
    apiKey: "AIzaSyDCaEe8IhHPbOfGBogMeUWk7elRO3Ld9xk",
    authDomain: "ecom3213.firebaseapp.com",
    databaseURL: "https://ecom3213.firebaseio.com",
    projectId: "ecom3213",
    storageBucket: "",
    messagingSenderId: "152696858598",
    appId: "1:152696858598:web:5d5412806088715f"
  }

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"})
export const signInWithGoogle= ()=>auth.signInWithPopup(provider);

export default firebase;