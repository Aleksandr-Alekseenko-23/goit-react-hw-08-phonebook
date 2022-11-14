import styled from 'styled-components';
import { Button } from 'components/AddContactsForm/AddContactsForm.styled';
import backgroundColor from '../../Assets/img/background.png';
import { breakpoints } from '../Utils/Breakpoints';

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
  display: flex;
  flex-direction: column;
  background: url(${backgroundColor});
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${p => `${p.theme.space[3] * 35}px`};
  padding: ${p => `${p.theme.space[3]}px`};

  @media ${breakpoints.minTablet} {
    width: ${p => `${p.theme.space[2] * 100}px`};
    padding: ${p => `${p.theme.space[4]}px`};
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => `${p.theme.space[2]}px`};
  margin-bottom: ${p => `${p.theme.space[3]}px`};
  color: ${p => p.theme.colors.text.secondaryText};
  font-size: ${p => p.theme.fontSizes.l};
  @media ${breakpoints.minTablet} {
    gap: ${p => `${p.theme.space[3]}px`};
    margin-bottom: ${p => `${p.theme.space[4]}px`};
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const FormInput = styled.input`
  padding: ${p => `${p.theme.space[2]}px`};
  margin: ${p => `${p.theme.space[0]}px`};
  color: ${p => p.theme.colors.text.primaryText};
  font-size: ${p => p.theme.fontSizes.l};

  @media ${breakpoints.minTablet} {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const ButtonSaveUpdate = styled(Button)`
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonIcon = styled.img`
  @media ${breakpoints.desktop} {
    width: ${p => `${p.theme.space[5] * 3}px`};
    height: ${p => `${p.theme.space[5] * 3}px`};
  }
`;

export const ButtonCloseModal = styled.button`
  position: absolute;
  flex-shrink: ${p => `${p.theme.space[0]}px`};
  top: ${p => `${p.theme.space[0]}px`};
  right: ${p => `${p.theme.space[0]}px`};
  background-color: ${p => p.theme.colors.transparent};
  border-color: ${p => p.theme.colors.button.btnBorderRed};
  width: ${p => `${p.theme.space[2] * 7}px`};
`;

export const ButtonImg = styled.img`
  width: ${p => `${p.theme.space[3] * 3}px`};
`;
