import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonLogout = styled.button`
  color: ${p => p.theme.colors.text.secondaryText};
  background-color: ${p => p.theme.colors.transparent};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-left: ${p => `${p.theme.space[2]}px`};
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${p => p.theme.radii.md};
  width: 100px;
  height: 30px;
  padding: ${p => `${p.theme.space[3]}px`};
  text-align: center;

  transition-property: border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: ${p => p.theme.colors.button.btnBorderWhite};
  }

  @media ${breakpoints.minTablet} {
    margin-left: ${p => `${p.theme.space[3]}px`};
    width: 120px;
    height: 54px;
    font-size: ${p => p.theme.fontSizes.xl};
    padding: ${p => `${p.theme.space[3]}px`};
  }
`;
