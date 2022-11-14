import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const List = styled.ul`
  min-width: ${p => `${p.theme.space[5] * 9}px`};
  max-height: ${p => `${p.theme.space[5] * 10}px`};
  overflow: auto;
  background-color: ${p => p.theme.colors.white};

  &::-webkit-scrollbar {
    width: 10px; /* ширина всей полосы прокрутки */
    display: block;
  }

  &:hover {
    &::-webkit-scrollbar {
      width: 20px; /* ширина всей полосы прокрутки */
    }
  }

  &::-webkit-scrollbar-track {
    background: white; /* цвет зоны отслеживания */
  }

  &::-webkit-scrollbar-thumb {
    background-color: orange; /* цвет бегунка */
    border-radius: 20px; /* округлось бегунка */
    border: 3px solid white; /* отступ вокруг бегунка */
  }

  scrollbar-width: thin; /* "auto" или "thin" */
  scrollbar-color: orange white; /* цвет бегунка и зоны отслеживания */

  @media ${breakpoints.minTablet} {
    max-width: ${p => `${p.theme.space[6] * 11}px`};
    max-height: ${p => `${p.theme.space[5] * 10}px`};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: ${p => `${p.theme.space[4]}px`};
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.text};
  letter-spacing: ${p => p.theme.letterSpacing.m};
  color: ${p => p.theme.colors.text.primaryText};
  border-top: ${p => p.theme.borders.normal} orange;
  padding-right: ${p => `${p.theme.space[2]}px`};
  padding-left: ${p => `${p.theme.space[2]}px`};
  height: ${p => `${p.theme.space[3] * 6}px`};

  &:last-child {
    border-bottom: ${p => p.theme.borders.normal} orange;
  }
  @media ${breakpoints.minTablet} {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Span = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.text.primaryText};
  width: ${p => `${p.theme.space[1] * 55}px`};

  @media ${breakpoints.minTablet} {
    width: ${p => `${p.theme.space[8]}px`};
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Img = styled.img`
  width: ${p => `${p.theme.space[4]}px`};

  @media ${breakpoints.minTablet} {
    width: ${p => `${p.theme.space[4] * 5}px`};
  }
`;

export const ButtonDelete = styled.button`
  width: ${p => `${p.theme.space[2] * 5}px`};
  background-color: ${p => p.theme.colors.white};
  border-color: ${p => p.theme.colors.button.btnBorderRed};

  @media ${breakpoints.minTablet} {
    width: ${p => `${p.theme.space[2] * 6}px`};
  }
`;

export const ButtonEdit = styled(ButtonDelete)`
  border-color: ${p => p.theme.colors.button.btnBorder};
  margin-right: ${p => `${p.theme.space[2]}px`};
`;

export const AvatarWrapper = styled.div`
  width: ${p => `${p.theme.space[2] * 5}px`};

  @media ${breakpoints.minTablet} {
    width: ${p => `${p.theme.space[1] * 25}px`};
  }
`;

export const TextPib = styled.p`
  width: ${p => `${p.theme.space[7]}px`};

  @media ${breakpoints.minTablet} {
    width: ${p => `${p.theme.space[5] * 10}px`};
  }
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.text.secondaryText};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};

  @media ${breakpoints.minTablet} {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const TitleContact = styled(Title)`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xl};
`;
