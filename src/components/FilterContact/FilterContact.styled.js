import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const InputPhoneBook = styled.input`
  background-color: white;
  min-width: 290px;
  height: 35px;
  border: none;
  outline: none;
  margin-bottom: 10px;
  font-size: 18px;
  color: orange;
  padding-left: 10px;

  &::placeholder {
    font-size: 18px;
    color: orange;
  }
  @media ${breakpoints.minTablet} {
    width: 678px;
    padding-left: 20px;
    font-size: 24px;

    &::placeholder {
      font-size: 24px;
    }
  }
`;

export const LabelPhoneBook = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;

  color: white;
  font-size: 18px;

  @media ${breakpoints.minTablet} {
    font-size: 24px;
    gap: 15px;
  }
`;

export const Button = styled.button`
  background-color: rgba(28, 28, 28, 0);
  border-color: orange;
  cursor: pointer;
  padding: 0;
  width: 50px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

export const ButtonImg = styled.img`
  width: 50px;
  height: 50px;
`;
