import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkHome = styled(NavLink)`
  color: ${p => p.theme.colors.text.secondaryText};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin: ${p => `${p.theme.space[0]}px`};
  list-style: none;
  text-decoration: none;
  display: block;
  width: 100px;
  height: 30px;
  padding: ${p => `${p.theme.space[3]}px`};
  text-align: center;

  &.active {
    color: ${p => p.theme.colors.text.primaryText};
  }
`;

export const Item = styled.li`
  cursor: pointer;
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${p => p.theme.radii.md};

  transition-property: border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    border-color: ${p => p.theme.colors.button.btnBorderWhite};
  }
`;

export const List = styled.ul`
  display: flex;
  gap: ${p => `${p.theme.space[6]}px`};
`;
