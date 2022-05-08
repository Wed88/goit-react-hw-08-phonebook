import { NavLink } from "react-router-dom";
import { Header } from "./AppBar.styled";
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

export const AppBar = () => {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header >
      <nav>
        <NavLink to='/register' >RegisterPage</NavLink>
        <NavLink to='/login' >LoginPage</NavLink>
        <NavLink to='/contacts' >ContactsPage</NavLink>
      </nav>
      {/* <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </Header>
  );
}