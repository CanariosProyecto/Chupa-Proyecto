
 /* import { initializeApp } from "firebase/app";
import Constants from "expo-constants" ;
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  databaseURL: Constants.manifest.extra.databaseURL,
};


 initializeApp(firebaseConfig);

 export const datebase = getFirestore();  */

/*

 import { initializeApp } from 'firebase/app';
 import { getAuth } from 'firebase/auth'; 
 import { getFirestore } from 'firebase/firestore'; 
 import Constants from 'expo-constants';
 
 

 const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.apiKey,
  authDomain: Constants.expoConfig?.extra?.authDomain,
  projectId: Constants.expoConfig?.extra?.projectId,
  storageBucket: Constants.expoConfig?.extra?.storageBucket,
  messagingSenderId: Constants.expoConfig?.extra?.messagingSenderId,
  appId: Constants.expoConfig?.extra?.appId,
};

 const app = initializeApp(firebaseConfig);
 
 
 export const auth = getAuth(app); 
 export const database = getFirestore(app); */
 
 import Constants from 'expo-constants';
 export const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.apiKey,
  authDomain: Constants.expoConfig?.extra?.authDomain,
  projectId: Constants.expoConfig?.extra?.projectId,
  storageBucket: Constants.expoConfig?.extra?.storageBucket,
  messagingSenderId: Constants.expoConfig?.extra?.messagingSenderId,
  appId: Constants.expoConfig?.extra?.appId,
};