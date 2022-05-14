import { lazy, useEffect,Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from 'components/Layout/Layout';
import authOperations from '../../redux/auth/auth-operations'
import authSelectors from 'redux/auth/auth-selectors';
import PrivateRoute from '../PrivateRoute'
import PublicRoute from 'components/PublicRoute';

const RegisterPage = lazy(() =>
  import('pages/RegisterPage/RegisterPage').then(module => ({default: module.RegisterPage})));

const LoginPage = lazy(() =>
  import('pages/LoginPage/LoginPage').then(module => ({default: module.LoginPage})));

const ContactsPage = lazy(() =>
  import('pages/ContactsPage/ContactsPage').then(module => ({default: module.ContactsPage})));


export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(authSelectors.getIsFetchingCurrent)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrent && (
      <Suspense fallback='Загружаем...'>
      <Routes>
        <Route path="/" element={<Layout />} >          
          <Route path="register" element={<PublicRoute redirectTo="/contacts" restricted><RegisterPage /></PublicRoute>} />          
          <Route path="login" element={<PublicRoute redirectTo="/contacts" restricted><LoginPage /></PublicRoute>} />
          <Route path="contacts" element={<PrivateRoute redirectTo="/login"><ContactsPage /></PrivateRoute>} />
          <Route path='*' element={<Navigate to='/contacts' />} />
        </Route>
      </Routes>
      </Suspense>
    )
  );
}

