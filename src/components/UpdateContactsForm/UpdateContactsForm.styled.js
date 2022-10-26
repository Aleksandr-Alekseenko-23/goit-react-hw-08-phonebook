import styled from 'styled-components';
import { Button } from 'components/AddForm/AddForm.styled';
import backgroundColor from '../../Assets/img/background.png';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1050;

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 1;
  visibility: visible;
  pointer-events: auto;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FormModal = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  background: url(${backgroundColor});
  z-index: 100;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  color: white;
`;

export const FormInput = styled.input`
  padding: 5px;
  margin: 0;
  color: orange;
  font-size: 24px;
`;

export const ButtonSaveUpdate = styled(Button)`
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonCloseModal = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border-color: red;
  cursor: pointer;
`;
