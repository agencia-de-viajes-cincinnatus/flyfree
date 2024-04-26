'use client';
import { useCookies } from 'react-cookie';

const useToken = () => {
  const [cookies] = useCookies(['authjs.session-token']);
  const user = cookies['authjs.session-token'];
  console.log(user);
  return { user };
};

export default useToken;
