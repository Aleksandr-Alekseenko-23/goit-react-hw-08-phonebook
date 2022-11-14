import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const FooterWrapper = styled.footer`
  flex-shrink: ${p => `${p.theme.space[0]}px`};
  border-top: ${p => p.theme.borders.normal} rgba(236, 236, 236, 1);
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.colors.text.secondaryText};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.m};
  min-height: ${p => `${p.theme.space[2] * 11}px`};
  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;

export const WrapperMob = styled(Wrapper)`
  gap: ${p => `${p.theme.space[5]}px`};
  margin-top: auto;
  margin-bottom: ${p => `${p.theme.space[4]}px`};
`;

export const Item = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: ${p => `${p.theme.space[2] * 11}px`};
  height: ${p => `${p.theme.space[2] * 11}px`};
  border-radius: ${p => p.theme.radii.round};
  margin-right: ${p => `${p.theme.space[4]}px`};

  background-color: ${p => p.theme.colors.white};

  &:last-child {
    margin-right: ${p => `${p.theme.space[0]}px`};
  }
`;

export const LinkGoIT = styled.a`
  margin-left: ${p => `${p.theme.space[2]}px`};
  margin-right: ${p => `${p.theme.space[2]}px`};
  outline: ${p => p.theme.borders.none};
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListMob = styled(List)`
  justify-content: center;
  padding: ${p => `${p.theme.space[0]}px`};
`;

export const Button = styled.button`
  color: ${p => p.theme.colors.text.secondaryText};
  background-color: ${p => p.theme.colors.transparent};
  border: ${p => p.theme.borders.none};
  text-decoration: underline;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const ButtonImg = styled.img`
  width: 32px;
`;
