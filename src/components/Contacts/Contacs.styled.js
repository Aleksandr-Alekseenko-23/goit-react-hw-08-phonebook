import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 700px;
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
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const Item = styled.li`
  font-size: 24px;
  color: orange;
  display: flex;
  align-items: center;
  border-top: solid 1px orange;
  padding: 5px;

  &:last-child {
    border-bottom: solid 1px orange;
  }
`;

export const Span = styled.span`
  font-size: 24px;
  color: orange;
  width: 250px;
`;

export const Img = styled.img`
  width: 20px;
`;

export const ButtonDelete = styled.button`
  width: 30px;
  background-color: white;
  padding: 0;
  border-color: red;
  cursor: pointer;
`;

export const ButtonEdit = styled(ButtonDelete)`
  border-color: orange;
  margin-right: 5px;
`;

export const AvatarWrappen = styled.div`
  width: 50px;
`;

export const TextPib = styled.p`
  width: 320px;
  margin: 0;
`;

export const Title = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: normal;
  margin: 0;
`;
