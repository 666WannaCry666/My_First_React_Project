import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar'
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
