import { lazy, useEffect,Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from 'components/Layout/Layout';
import authOperations from '../../redux/auth/auth-operations'
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

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
      <Suspense fallback=''>
      <Routes>
        <Route path="/" element={<Layout />} >
          {/* <Route index element={<HomePage />} /> */}
          <Route path="register" element={<PublicRoute redirectTo="/contacts" restricted><RegisterPage /></PublicRoute>} />
          {/* <Route path="login" element={<LoginPage />} /> */}
          <Route path="login" element={<PublicRoute redirectTo="/contacts" restricted><LoginPage /></PublicRoute>} />
          <Route path="contacts" element={<PrivateRoute redirectTo="/login"><ContactsPage /></PrivateRoute>} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
      </Suspense>
  );

  // return (
  //   <div style={{ padding: '20px' }}>
  //     <h1>Phonebook</h1>
  //     <ContactForm  />
  //     <h2>Contacts</h2>
  //     <Filter />
  //     <ContactList/>
  //   </div>
  // );
}

// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Switch, Route } from 'react-router-dom';
// import AppBar from './components/AppBar';
// import TodosView from './views/TodosView';
// import HomeView from './views/HomeView';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
// import Container from './components/Container';
// import { authOperations } from './redux/auth';

// export default function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(authOperations.fetchCurrentUser());
//   }, [dispatch]);

//   return (
//     <Container>
//       <AppBar />

//       <Switch>
//         <Route exact path="/" component={HomeView} />
//         <Route path="/register" component={RegisterView} />
//         <Route path="/login" component={LoginView} />
//         <Route path="/todos" component={TodosView} />
//       </Switch>
//     </Container>
//   );
// }