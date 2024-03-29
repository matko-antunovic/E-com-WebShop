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

export const createUserProfile=async(userAuth, additionalData)=>{
  if(!userAuth)return;

  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot=await userRef.get();

  if(!snapShot.exists){
    const {displayName, email}=userAuth;
    const createdAt=new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log(error.message)
    }
  }
  return userRef;
  
}

///////////////////////////////////////////////////////////////////////////////////////
export const addCollectionAndDocuments=async (collectionKey,objectsToAdd)=>{
  const collectionRef=firestore.collection(collectionKey);

  const batch=firestore.batch();
  objectsToAdd.forEach(obj=>{
    const newDocRef=collectionRef.doc();
    batch.set(newDocRef,obj);
  })

  return await batch.commit()
}
////////////////////////////////////////////////////////////////////////////////////////


export const convertCollectionsSnapshotToMap=(collections)=>{
  const transformedCollection=collections.docs.map(
    doc=>{
      const {title,items}=doc.data();

      return {
        routeName:encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }
    }
  )
 return transformedCollection.reduce((acc,collection)=>{
    acc[collection.title.toLowerCase()]=collection;
    return acc;
  },{}) 
}



////////////////////////////////////////////////////////////////////////////////////////////
firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"})
export const signInWithGoogle= ()=>auth.signInWithPopup(provider);

export default firebase;