import styled from 'styled-components';
import { breakpoints } from 'components/Utils/Breakpoints';

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelRegister = styled.label`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 18px;
  margin-bottom: 10px;

  @media ${breakpoints.minTablet} {
    font-size: 32px;
  }
`;

export const InputRegister = styled.input`
  min-width: 278px;
  max-width: 400px;
  height: 50px;
  margin-top: 5px;
  border: none;
  outline: none;
  font-size: 18px;
  color: orange;
  padding-left: 10px;

  @media ${breakpoints.minTablet} {
    width: 500px;
    font-size: 24px;
    padding-left: 20px;
  }
`;

export const ButtonRegister = styled.button`
  width: 120px;
  height: 45px;
  cursor: pointer;
  background-color: transparent;
  color: white;
  border-color: white;
  border-radius: 5%;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;

  &:hover,
  &:active {
    color: orange;
  }

  @media ${breakpoints.minTablet} {
    width: 180px;
    height: 65px;
    font-size: 24px;
  }
`;
