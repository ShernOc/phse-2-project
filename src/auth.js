import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

const logOut = () => signOut(auth);

export { signUp, signIn, logOut };
