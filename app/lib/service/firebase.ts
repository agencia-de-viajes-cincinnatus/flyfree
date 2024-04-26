// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDV7WSDpSHnHs2DcU6648anIre4D4lWHtw',
  authDomain: 'miniproyecto-d7a84.firebaseapp.com',
  projectId: 'miniproyecto-d7a84',
  storageBucket: 'miniproyecto-d7a84.appspot.com',
  messagingSenderId: '405461671430',
  appId: '1:405461671430:web:5bc44a12e16c4d8c266d87',
  measurementId: 'G-17F9W3Y18Y',
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.FIREBASE_APP_ID,
  // measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
