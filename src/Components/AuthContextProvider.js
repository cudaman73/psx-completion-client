import React, { useState, useEffect } from 'react';
import AuthContext from '../AuthContext';

const post = (url, body) =>
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false); // true once /session has been checked

  useEffect(() => {
    verifySession();
  }, []);

  const verifySession = async () => {
    try {
      const res = await fetch('/session');
      setIsAuthenticated(res.ok);
    } catch (err) {
      setIsAuthenticated(false);
    } finally {
      setAuthChecked(true);
    }
  };

  const login = async (username, password) => {
    const res = await post('/login', { username, password });
    if (res.ok) {
      setIsAuthenticated(true);
      setUser({ username });
    }
    return res; // callers check res.ok
  };

  const register = async (username, password) => {
    const res = await post('/register', { username, password });
    if (res.ok) {
      setIsAuthenticated(true);
      setUser({ username });
    }
    return res;
  };

  const logout = async () => {
    try {
      await post('/logout', {});
    } catch (err) {
      /* ignore */
    }
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, isAuthenticated, authChecked, verifySession }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
