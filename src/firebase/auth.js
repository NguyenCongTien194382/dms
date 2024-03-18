import { auth } from "./firebase";
import {
    signInWithPopup,
    GoogleAuthProvider,
    OAuthProvider
} from "firebase/auth";

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // const user = result.user;
};

export const doSignOut = () => {
    return auth.signOut();
};

export const doSignInWithMicrosoft = async () => {
    const provider = new OAuthProvider('microsoft.com')
    const result = await signInWithPopup(auth, provider);
    // const user = result.user;
}