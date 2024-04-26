import React, { useState, useEffect } from 'react';
import { loginWithGoogle } from '@/app/lib/service/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
interface User {
  uid: string;
  name: string;
  photoURL: string;
}

export default function ButtonLoginWithGoogle() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((user) => {
        if (user && user.uid) {
          setUser({
            uid: user.uid,
            name: user.displayName ?? '',
            photoURL: user.photoURL ?? '',
          });
          localStorage.setItem('user', JSON.stringify(user));
          window.location.replace('/client/profile');
        } else {
          console.error('Error: User object is invalid');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='flex justify-center'>
      <button
        className='flex items-center w-50 rounded-md bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600 focus:border-red-300 focus:outline-none focus:ring mt-4'
        onClick={handleGoogleLogin}
      >
        <FontAwesomeIcon icon={faGoogle} className='mr-2' />
        Sign in with Google
      </button>
    </div>
  );
}
