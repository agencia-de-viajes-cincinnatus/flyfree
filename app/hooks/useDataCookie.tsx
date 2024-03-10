import { useEffect, useState } from 'react';
import { fetchProfileData } from '../lib/data';

const useDatauser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfileData().then((data) => {
      setUser(data);
    });
  }, []);
  return {
    user,
  };
};

export default useDatauser;
