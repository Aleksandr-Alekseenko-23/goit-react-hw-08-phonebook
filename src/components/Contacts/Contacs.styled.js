import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 250px;
  background-color: white;
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
  width: 250px;
  margin: 0;
`;
