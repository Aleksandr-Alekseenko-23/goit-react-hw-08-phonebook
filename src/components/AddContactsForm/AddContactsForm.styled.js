import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => `${p.theme.space[3]}px`};
  justify-content: center;
  align-items: center;

  @media ${breakpoints.onlyTablet} {
    flex-direction: row;
  }
`;

export const FormPhoneBook = styled.form`
  display: flex;
  gap: ${p => `${p.theme.space[5]}px`};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const InputPhoneBook = styled.input`
  background-color: ${p => p.theme.colors.white};
  min-width: ${p => `${p.theme.space[2] * 77}px`};
  height: ${p => `${p.theme.space[3] * 6}px`};
  border: ${p => p.theme.borders.none};
  outline: ${p => p.theme.borders.none};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.m};
  color: ${p => p.theme.colors.text.primaryText};
  padding-left: ${p => `${p.theme.space[3]}px`};

  &::placeholder {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.lineHeights.text};
    letter-spacing: ${p => p.theme.letterSpacing.m};
    color: ${p => p.theme.colors.text.primaryText};
  }
  @media ${breakpoints.minTablet} {
    width: ${p => `${p.theme.space[5] * 10}px`};
    padding-left: ${p => `${p.theme.space[4]}px`};
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.lineHeights.text};
    letter-spacing: ${p => p.theme.letterSpacing.l};
  }
  @media ${breakpoints.desktop} {
    width: ${p => `${p.theme.space[6] * 7}px`};
  }
`;

export const LabelPhoneBook = styled.label`
  display: flex;
  gap: ${p => `${p.theme.space[4]}px`};
  flex-direction: column;

  color: ${p => p.theme.colors.text.secondaryText};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.l};
`;

export const Button = styled.button`
  background-color: ${p => p.theme.colors.button.primaryBtnBackground};
  border-color: ${p => p.theme.colors.button.btnBorder};
  width: ${p => `${p.theme.space[6]}px`};
  height: ${p => `${p.theme.space[6]}px`};
  @media ${breakpoints.desktop} {
    width: ${p => `${p.theme.space[5] * 3}px`};
    height: ${p => `${p.theme.space[5] * 3}px`};
  }
`;

export const ButtonIcon = styled.img`
  @media ${breakpoints.desktop} {
    width: ${p => `${p.theme.space[5] * 3}px`};
    height: ${p => `${p.theme.space[5] * 3}px`};
  }
`;
