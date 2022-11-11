import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContactsFilter,
  getContactsState,
} from '../../redux/Contacts/ContactsSelectors';
import { filterContacts } from 'redux/Contacts/ContactsSlice.js';
import {
  InputPhoneBook,
  LabelPhoneBook,
  Button,
  ButtonImg,
} from './FilterContactsForm.styled.js';
import useMatchMedia from '../../hooks/UseMatchMedia';
import Icon from '../../Assets/img/plus.svg';

function FilterContactsForm({ openModal }) {
  const dispatch = useDispatch();
  const { isMobile } = useMatchMedia();
  const filterValue = useSelector(getContactsFilter);
  const contacts = useSelector(getContactsState);
  const handleFilterChange = ({ target: { value } }) =>
    dispatch(filterContacts(value));
  return (
    <>
      {isMobile && (
        <Button
          onClick={() => {
            openModal();
          }}
          aria-label="open modal"
        >
          <ButtonImg src={Icon} alt="Plus" />
        </Button>
      )}
      {contacts.length > 0 && (
        <>
          <LabelPhoneBook>
            Find contacts by name
            <InputPhoneBook
              type="text"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={filterValue || ''}
              onChange={handleFilterChange}
              placeholder="Name"
            />
          </LabelPhoneBook>
        </>
      )}
    </>
  );
}

export default FilterContactsForm;
