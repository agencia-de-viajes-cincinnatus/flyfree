'use server';
import { cookies } from 'next/headers';
const useToken = () => {
  const cookieStore = cookies();
  const user = cookieStore.get('authjs.session-token')?.value;
  return {
    user,
  };
};

export default useToken;
