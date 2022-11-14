import styled from 'styled-components';
import { breakpoints } from '../Utils/Breakpoints';
import {
  InputPhoneBook,
  LabelPhoneBook,
  Button,
} from 'components/AddContactsForm/AddContactsForm.styled';

export const InputFilter = styled(InputPhoneBook)`
  min-width: ${p => `${p.theme.space[5] * 9}px`};
  height: ${p => `${p.theme.space[3] * 6}px`};
  margin-bottom: ${p => `${p.theme.space[3]}px`};

  @media ${breakpoints.minTablet} {
    width: ${p => `${p.theme.space[9] + 166}px`};
  }
`;

export const LabelFilter = styled(LabelPhoneBook)``;

export const ButtonPlus = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

export const ButtonImg = styled.img`
  width: ${p => `${p.theme.space[6] - 4}px`};
  height: ${p => `${p.theme.space[6] - 4}px`};
`;
