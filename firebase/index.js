// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAdditionalUserInfo,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBB6ssrvUUg21ib_-f5lzmtvF29P3I_v58",
  authDomain: "gocontacts-2f3ea.firebaseapp.com",
  projectId: "gocontacts-2f3ea",
  storageBucket: "gocontacts-2f3ea.appspot.com",
  messagingSenderId: "127978493653",
  appId: "1:127978493653:web:67c5224cfb6ba11f5ef45c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("https://www.googleapis.com/auth/contacts.readonly");
googleProvider.addScope(
  "https://www.googleapis.com/auth/user.phonenumbers.read"
);

const getUserContacts = async (profileId, accessToken) => {
  const url = `https://www.googleapis.com/auth/contacts.readonly/${profileId}?personFields=birthdays,genders&access_token=${accessToken}`;
  let res = await fetch(url);
  res = await res.json();
  return res;
};

const signIn = async () => {
  const auth = getAuth();
  let result, credentials;
  let info, data;
  try {
    result = await signInWithPopup(auth, googleProvider);
    // `https://people.googleapis.com/v1/people/${res.additionalUserInfo.profile.id}?personFields=birthdays,genders&access_token=${res.credential.accessToken}`
    credentials = GoogleAuthProvider.credentialFromResult(result);
    info = getAdditionalUserInfo(result);
    data = await getUserContacts(info.profile.id, credentials.accessToken);
  } catch (error) {
    credentials = GoogleAuthProvider.credentialFromError(error);
    result = null;
  }
  return {
    credentials,
    result,
    info,
    data,
  };
};

export { signIn };
