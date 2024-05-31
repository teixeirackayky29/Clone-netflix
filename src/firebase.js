import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword } from "firebase/auth";
import { addDoc,
    collection, 
    getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAzx2fDx-qzNVyS8qXawSaBD4HP69BU_2c",
  authDomain: "netflix-clone-67486.firebaseapp.com",
  projectId: "netflix-clone-67486",
  storageBucket: "netflix-clone-67486.appspot.com",
  messagingSenderId: "401623142151",
  appId: "1:401623142151:web:2c99d01ad297675308bfa2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email,
        password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout =() =>{
    signOut(auth);
}

export {auth, db, login, signup, logout};