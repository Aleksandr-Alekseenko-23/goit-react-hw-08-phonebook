import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  FormPhoneBook,
  InputPhoneBook,
  LabelPhoneBook,
  Button,
  ButtonIcon,
  Wrapper,
} from './AddContactsForm.styled.js';
import Icon from './../../Assets/img/plus.svg';
import { addContacts } from '../../redux/Contacts/ContactsOperations';
import { getContactsState } from '../../redux/Contacts/ContactsSelectors';

export const AddContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsState);

  const doubleCheckName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const doubleCheckNumber = numberPhone => {
    return contacts.find(contact => contact.number === numberPhone);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    const { nameUser, number } = e.target.elements;
    const name = nameUser.value.trim();
    const numberPhone = number.value.trim();

    if (name === '' || numberPhone === '') {
      return toast.info('Please enter contacts!');
    }
    if (doubleCheckName(name) && doubleCheckNumber(numberPhone)) {
      return toast.info('Such contact exists!');
    }
    dispatch(addContacts({ id: nanoid(), name, number: numberPhone }));
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
        <ButtonIcon src={Icon} alt="Plus" />
      </Button>
    </FormPhoneBook>
  );
};

export default AddContactsForm;
