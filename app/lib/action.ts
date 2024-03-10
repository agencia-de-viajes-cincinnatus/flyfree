'use server';
import { Register } from './definitions';
import { set, z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import errorMap from 'zod/locales/en.js';
const registerSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  validatepassword: z.string(),
});

const omitregisterSchema = registerSchema.omit({
  id: true,
  date: true,
});

export async function registerUser(
  prevState: string | undefined,
  formData: FormData
) {
  const { username, email, password, validatepassword } =
    omitregisterSchema.parse(Object.fromEntries(formData.entries()));

  const register = 'http://localhost:3000/api/v1/auth/register';
  if (password !== validatepassword) {
    return 'PasswordsMismatch';
  }
  try {
    const res = await fetch(register, {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('An unexpected error happened:', error);
  }

  revalidatePath('/auth/login');
  redirect('/auth/login');
}

const loginSchema = z.object({
  id: z.string(),
  email: z.string(),
  password: z.string(),
});

const omitloginSchema = loginSchema.omit({
  id: true,
  date: true,
});

export async function loginUser(
  prevState: string | undefined,
  formData: FormData
) {
  const { email, password } = omitloginSchema.parse(
    Object.fromEntries(formData.entries())
  );

  const login = 'http://localhost:3000/api/v1/auth/login';

  try {
    const res = await fetch(login, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.status === 400 || res.status === 401) {
      return 'PasswordsMismatch';
    }
  } catch (error) {
    console.error('An unexpected error happened:', error);
  }
  revalidatePath('/client/profile');
  redirect('/client/profile');
}
