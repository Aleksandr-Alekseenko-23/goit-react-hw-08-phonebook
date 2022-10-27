import styled from 'styled-components';

export const InputPhoneBook = styled.input`
  background-color: white;
  width: 678px;
  height: 35px;
  border: none;
  outline: none;
  margin-bottom: 10px;
  font-size: 24px;
  color: orange;
  padding-left: 20px;

  &::placeholder {
    font-size: 24px;
    color: orange;
  }
`;

export const LabelPhoneBook = styled.label`
  display: flex;
  gap: 15px;
  flex-direction: column;

  color: white;
  font-size: 24px;
`;
