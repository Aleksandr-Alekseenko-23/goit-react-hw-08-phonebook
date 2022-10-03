import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkHome = styled(NavLink)`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
  list-style: none;
  text-decoration: none;
  width: 100%;

  &.active {
    color: red;
  }
`;

export const Item = styled.li`
  border: solid 1px white;
  border-color: white;
  border-radius: 5%;
  padding: 10px;
  cursor: pointer;
`;

export const List = styled.ul`
  display: flex;
  gap: 30px;
`;
