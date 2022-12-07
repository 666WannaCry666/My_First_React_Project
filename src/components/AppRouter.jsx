import React from 'react';
import { useContext } from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import { AuthContext } from '../context';
import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';
import { publicRoutes, privateRoutes } from '../router';
import Loader from './UI/Loader/Loader';

export default function AppRouter() {
  const {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }

  return (
    isAuth
      ? <Routes>
          {privateRoutes.map(route => 
            <Route 
              key={route.path}
              element={route.component} 
              path={route.path} 
              exact={route.exact} 
            />
          )}
          <Route path='*' element={<Navigate to='/posts'/>} />
        </Routes>
      : <Routes>
          {publicRoutes.map(route => 
            <Route 
              key={route.path}
              element={route.component} 
              path={route.path} 
              exact={route.exact} 
            />
          )}
          <Route path='*' element={<Navigate to='/login'/>} />
        </Routes>
  )
}
