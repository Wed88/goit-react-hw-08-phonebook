import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: 'inline-block';
  textDecoration: 'none';
  padding: 12;
  fontWeight: 700;
  color: '#2A363B';
  
  &.active {
    color: '#E84A5F';
  },
`