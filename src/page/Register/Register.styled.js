import styled from 'styled-components';

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelRegister = styled.label`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 32px;
  margin-bottom: 10px;
`;

export const InputRegister = styled.input`
  width: 500px;
  height: 50px;
  margin-top: 5px;
  border: none;
  outline: none;
  font-size: 24px;
  color: orange;
  padding-left: 20px;
`;

export const ButtonRegister = styled.button`
  width: 180px;
  height: 65px;
  cursor: pointer;
  background-color: transparent;
  color: white;
  border-color: white;
  border-radius: 5%;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;

  &:hover,
  &:active {
    color: orange;
  }
`;
