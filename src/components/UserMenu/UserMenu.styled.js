import styled from 'styled-components';

export const Wrappen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonLogout = styled.button`
  color: white;
  background-color: transparent;
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
  width: 120px;
  height: 54px;
  border: solid 1px orange;
  border-color: white;
  border-radius: 5%;
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;
