import { useDispatch, useSelector } from 'react-redux';
import  authOperations  from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors'
import {Container, Name} from './UserMenu.styled'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  

  return (
    <Container >
      <Name >Добро пожаловать, {name}</Name>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </Container>
  );
}