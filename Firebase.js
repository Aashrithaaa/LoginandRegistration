import { initializeApp } from 'Firebase/app'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import{getFirestore, doc, getDoc, setDoc} from 'Firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC30kqGzeTw0ikUo0HgAp2wmsRRr1FxvYo",
    authDomain: "deakin-web-app-ea330.firebaseapp.com",
    projectId: "deakin-web-app-ea330",
    storageBucket: "deakin-web-app-ea330.appspot.com",
    messagingSenderId: "1044833232582",
    appId: "1:1044833232582:web:53a21e753bd05d9581d9c7",
    measurementId: "G-GW6R9SLB4Q"
  };
  // Initialize Firebase;
const Firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters ({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const db = getFirestore();

export const createUserDocFromAuth= async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists())

    if(! userSnapshot.exists()){
        const  { displayName, email} = userAuth;
        const createdAt = new Date();
    }

    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        })
            
    }
    catch (error){
    console.log('error in creating', error.message)
}
return userDocRef;
}

