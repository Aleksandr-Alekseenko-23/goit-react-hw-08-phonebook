import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const LogoText = styled.p`
  display: flex;
  color: ${p => p.theme.colors.text.primaryText};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-style: italic;

  @media ${breakpoints.minTablet} {
    font-size: ${p => p.theme.fontSizes.xxxl};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => `${p.theme.space[3]}px`};
`;

export const TextColor = styled.span`
  color: ${p => p.theme.colors.text.secondaryText};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-style: italic;
  margin-left: ${p => `${p.theme.space[0]}px`};
  margin-top: ${p => `${p.theme.space[0]}px`};
  margin-bottom: ${p => `${p.theme.space[0]}px`};
  @media ${breakpoints.minTablet} {
    font-size: ${p => p.theme.fontSizes.xxxl};
  }
`;

export const LogoImg = styled.img`
  text-align: center;
`;
