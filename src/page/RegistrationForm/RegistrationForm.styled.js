import styled from 'styled-components';
import { breakpoints } from 'components/Utils/Breakpoints';

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelRegister = styled.label`
  display: flex;
  flex-direction: column;
  color: ${p => p.theme.colors.text.secondaryText};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => `${p.theme.space[3]}px`};
  @media ${breakpoints.minTablet} {
    font-size: ${p => p.theme.fontSizes.xxl};
  }
`;

export const InputRegister = styled.input`
  min-width: 278px;
  max-width: 400px;
  height: 60px;
  margin-top: ${p => `${p.theme.space[2]}px`};
  border: ${p => p.theme.borders.none};
  outline: ${p => p.theme.borders.none};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p =>
    p.errors ? p.theme.colors.text.error : p.theme.colors.text.primaryText};
  padding-left: ${p => `${p.theme.space[3]}px`};
  padding-top: ${p => `${p.theme.space[0]}px`};

  @media ${breakpoints.minTablet} {
    width: 500px;
    font-size: ${p => p.theme.fontSizes.xl};
    padding-left: ${p => `${p.theme.space[4]}px`};
  }
`;

export const ButtonRegister = styled.button`
  width: 120px;
  height: 45px;
  background-color: ${p => p.theme.colors.transparent};
  color: ${p => p.theme.colors.text.secondaryText};
  border-color: ${p => p.theme.colors.button.btnBorderWhite};
  border-radius: ${p => p.theme.radii.md};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => `${p.theme.space[3]}px`};

  transition-property: color, border-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:active {
    color: ${p => p.theme.colors.text.primaryText};
    border-color: ${p => p.theme.colors.button.btnBorder};
  }

  @media ${breakpoints.minTablet} {
    width: 180px;
    height: 65px;
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const ErrorText = styled.span`
  position: absolute;
  color: ${p => p.theme.colors.text.error};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  bottom: ${p => `${p.theme.space[0]}px`};
  padding-left: ${p => `${p.theme.space[3]}px`};

  @media ${breakpoints.minTablet} {
    padding-left: ${p => `${p.theme.space[4]}px`};
  }
`;

export const Wrraper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ButtonVisibillity = styled.button`
  position: absolute;
  right: 0;
  top: 25%;
  background-color: ${p => p.theme.colors.transparent};
  border: ${p => p.theme.borders.none};
  color: ${p =>
    p.errors ? p.theme.colors.text.error : p.theme.colors.text.primaryText};
`;
