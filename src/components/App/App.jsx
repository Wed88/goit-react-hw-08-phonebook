import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from 'components/Layout/Layout';
import { RegisterPage, LoginPage, ContactsPage } from 'pages';
import authOperations from '../../redux/auth/auth-operations'

// import ContactForm from '../ContactForm/ContactForm';
// import Filter from '../Filter/Filter';
// import ContactList from '../ContactList/ContactList';

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

    return (
      <Routes>
        <Route path="/" element={<Layout />} >
          {/* <Route index element={<HomePage />} /> */}
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
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