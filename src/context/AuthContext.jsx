import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    if (email === 'admin@ebanking.com' && password === 'admin123') {
      const u = { id: 1, name: 'Admin User', email, role: 'ADMIN' };
      sessionStorage.setItem('user', JSON.stringify(u));
      setUser(u);
      return 'ADMIN';
    } else if (email === 'employee@ebanking.com' && password === 'emp123') {
      const u = { id: 2, name: 'Rajesh Kumar', email, role: 'EMPLOYEE' };
      sessionStorage.setItem('user', JSON.stringify(u));
      setUser(u);
      return 'EMPLOYEE';
    } else if (email === 'customer@ebanking.com' && password === 'cust123') {
      const u = { id: 3, name: 'Pranav Patil', email, role: 'CUSTOMER' };
      sessionStorage.setItem('user', JSON.stringify(u));
      setUser(u);
      return 'CUSTOMER';
    }
    throw new Error('Invalid credentials');
  };

  const logout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
