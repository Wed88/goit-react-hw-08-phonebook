import { Link } from "./Navigation.styled";
// import { useSelector } from 'react-redux';
// import Navigation from './Navigation';
// import UserMenu from './UserMenu';
// import AuthNav from './AuthNav';
// import { authSelectors } from '../redux/auth';

// const styles = {
//   header: {
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // borderBottom: '1px solid #2A363B',
//   },
// };

export const Navigation = () => {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
      <nav>
        <Link to='/register' >RegisterPage</Link>
        <Link to='/login' >LoginPage</Link>
        <Link to='/contacts' >ContactsPage</Link>
      </nav>   
  );
}