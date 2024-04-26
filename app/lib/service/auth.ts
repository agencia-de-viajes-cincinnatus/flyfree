import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from './firebase';

export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider)
    .then((result) => result.user)
    .catch((error) => console.log(error));
};

export const logout = () => {
  return signOut(auth)
    .then(() => null)
    .catch((error) => console.log(error));
};
