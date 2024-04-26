import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const authPath = 'http://localhost:3000/api/v1/auth/';

const registerSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  rol: z.string(),
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
  const { username, email, password, validatepassword, rol } =
    omitregisterSchema.parse(Object.fromEntries(formData.entries()));

  if (password !== validatepassword) {
    return 'PasswordsMismatch';
  }
  try {
    const res = await fetch(`${authPath}register`, {
      method: 'POST',
      body: JSON.stringify({ username, email, password, rol }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('An unexpected error happened:', error);
  }
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
  // eslint-disable-next-line react-hooks/rules-of-hooks

  try {
    const res = await fetch(`${authPath}login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const json = await res.json();
      const cookie = (json.cookie = json.token);
      console.log(cookie);
    }
    if (res.status === 400 || res.status === 401) {
      return 'PasswordsMismatch';
    }
  } catch (error) {
    console.error('An unexpected error happened:', error);
  }
  revalidatePath('/client/profile');
  redirect('/client/profile');
}

export async function loginWithGoogle() {
  try {
    const res = await fetch(`${authPath}google-login`, {
      method: 'GET',
    });

    if (res.ok) {
      const json = await res.json();
      const cookie = (json.cookie = json.token);
      console.log(cookie);
    }
  } catch (error) {
    console.error('An unexpected error happened:', error);
  }
}
