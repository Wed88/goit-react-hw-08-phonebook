import { Link } from "./Navigation.styled";
import { useSelector } from 'react-redux';
import  authSelectors  from '../../redux/auth/auth-selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
 
  return (
    <nav>
      {isLoggedIn && (<Link to='/contacts' >Контакты</Link>)}       
    </nav>   
  );
}