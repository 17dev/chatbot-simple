```javascript
import { getSession, setSession } from 'next-auth/client';

export const saveSession = async (session) => {
  try {
    await setSession(session);
  } catch (error) {
    console.error('Error saving session', error);
  }
};

export const loadSession = async () => {
  try {
    const session = await getSession();
    return session;
  } catch (error) {
    console.error('Error loading session', error);
  }
};
```