import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 290px;
  max-height: 300px;
  overflow: auto;
  background-color: white;

  &::-webkit-scrollbar {
    width: 12px; /* ширина всей полосы прокрутки */
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
    max-width: 700px;
    max-height: 300px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const Item = styled.li`
  font-size: 12px;
  color: orange;
  display: flex;
  align-items: center;
  border-top: solid 1px orange;
  padding: 5px;

  &:last-child {
    border-bottom: solid 1px orange;
  }
  @media ${breakpoints.minTablet} {
    font-size: 24px;
  }
`;

export const Span = styled.span`
  font-size: 12px;
  color: orange;
  width: 110px;

  @media ${breakpoints.minTablet} {
    width: 250px;
    font-size: 24px;
  }
`;

export const Img = styled.img`
  width: 15px;

  @media ${breakpoints.minTablet} {
    width: 20px;
  }
`;

export const ButtonDelete = styled.button`
  width: 20px;
  background-color: white;
  padding: 0;
  border-color: red;
  cursor: pointer;

  @media ${breakpoints.minTablet} {
    width: 30px;
  }
`;

export const ButtonEdit = styled(ButtonDelete)`
  border-color: orange;
  margin-right: 5px;
`;

export const AvatarWrappen = styled.div`
  width: 20px;

  @media ${breakpoints.minTablet} {
    width: 50px;
  }
`;

export const TextPib = styled.p`
  width: 135px;
  margin: 0;

  @media ${breakpoints.minTablet} {
    width: 320px;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 18px;
  font-weight: normal;
  margin: 0;

  @media ${breakpoints.minTablet} {
    font-size: 24px;
  }
`;

export const TitleContact = styled(Title)`
  text-align: center;
  font-size: 24px;
`;
