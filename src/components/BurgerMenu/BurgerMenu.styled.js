import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import backgroundColor from '../../Assets/img/background.png';

export const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;

  background: url(${backgroundColor});
  z-index: 100;
`;
export const Main = styled.div`
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  text-transform: uppercase;
  height: 32px;
  margin-bottom: 20px;
  color: rgba(155, 159, 170, 1);

  text-decoration: none;
  &.active {
    color: rgba(255, 255, 255, 1);
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
`;
