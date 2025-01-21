import { useState, useEffect, useCallback } from 'react';

const EMAIL_STORAGE_KEY = 'newsletterEmail';

const useEmail = () => {
  const [email, setEmail] = useState(undefined);

  useEffect(() => {
    const storedEmail = localStorage.getItem(EMAIL_STORAGE_KEY);
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      setEmail(undefined);
    }
  }, []);

  const getEmail = useCallback(() => email, [email]);

  const setNewsletterEmail = useCallback((newEmail) => {
    if (newEmail) {
      localStorage.setItem(EMAIL_STORAGE_KEY, newEmail);
      setEmail(newEmail);
    }
  }, []);

  return { email, getEmail, setNewsletterEmail };
};

export default useEmail;
