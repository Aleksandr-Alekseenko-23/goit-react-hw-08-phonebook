import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const Wrappen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export const ButtonLogout = styled.button`
  color: white;
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
  width: 60px;
  height: 30px;
  border: solid 1px orange;
  border-color: white;
  border-radius: 5%;
  padding: 5px;
  cursor: pointer;

  &:hover {
    color: orange;
  }

  @media ${breakpoints.minTablet} {
    margin-left: 20px;
    width: 120px;
    height: 54px;
    font-size: 24px;
    padding: 10px;
  }
`;
