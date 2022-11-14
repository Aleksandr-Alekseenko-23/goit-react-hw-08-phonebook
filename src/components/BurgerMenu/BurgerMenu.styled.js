import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import backgroundColor from '../../Assets/img/background.png';

export const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  background: url(${backgroundColor});
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
  font-family: ${p => p.theme.fonts.gotham};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.text};
  text-transform: ${p => p.theme.textTransform.upCase};
  height: ${p => `${p.theme.space[5]}px`};
  margin-bottom: ${p => `${p.theme.space[4]}px`};
  color: ${p => p.theme.colors.text.linkText};
  text-decoration: none;
  &.active {
    color: ${p => p.theme.colors.text.secondaryText};
  }
`;
