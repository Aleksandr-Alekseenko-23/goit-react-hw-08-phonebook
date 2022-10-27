import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.desktop} {
    flex-direction: column;
  }
`;

export const FormPhoneBook = styled.form`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const InputPhoneBook = styled.input`
  background-color: white;
  width: 323px;
  height: 35px;
  border: none;
  outline: none;
  font-size: 24px;
  color: orange;
  padding-left: 20px;

  &::placeholder {
    font-size: 24px;
    color: orange;
  }

  @media ${breakpoints.desktop} {
    width: 448px;
  }
`;

export const LabelPhoneBook = styled.label`
  display: flex;
  gap: 15px;
  flex-direction: column;

  color: white;
  font-size: 24px;
`;

export const Button = styled.button`
  background-color: rgba(28, 28, 28, 0);
  border-color: orange;
  cursor: pointer;
  padding: 0;
  width: 70px;
  height: 70px;
  @media ${breakpoints.desktop} {
    width: 100px;
    height: 100px;
  }
`;
