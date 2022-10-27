import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {
  FormPhoneBook,
  InputPhoneBook,
  LabelPhoneBook,
  Button,
  Wrapper,
} from './AddForm.styled.js';
import Icon from './../../Assets/img/plus.svg';
import { addContacts } from '../../redux/usersOperations';

export const AddForm = () => {
  const dispatch = useDispatch();

  const onHandleSubmit = e => {
    e.preventDefault();
    const { nameUser, number } = e.target.elements;
    if (nameUser.value.trim() === '' || number.value.trim() === '') {
      toast.error('Please enter contacts!');
      return;
    }
    dispatch(addContacts({ name: nameUser.value, number: number.value }));
    e.target.reset();
  };

  return (
    <FormPhoneBook onSubmit={onHandleSubmit}>
      <Wrapper>
        <LabelPhoneBook>
          Contact name
          <InputPhoneBook
            type="text"
            name="nameUser"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </LabelPhoneBook>
        <LabelPhoneBook>
          Phone number
          <InputPhoneBook
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
        </LabelPhoneBook>
      </Wrapper>
      <Button type="submit">
        <img src={Icon} alt="Plus" />
      </Button>
    </FormPhoneBook>
  );
};

export default AddForm;
