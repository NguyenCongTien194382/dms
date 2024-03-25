import axios from 'axios';
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
    const response = await axios.post('https://dms-api.rikkei.org/api/login', {
        email: result._tokenResponse.email,
        token: result._tokenResponse.oauthAccessToken
    });
    if (response.data.data) {
        localStorage.setItem('user_token', response.data.data.access_token)
        localStorage.setItem('user_info', JSON.stringify(response.data.data.user))
    }
}