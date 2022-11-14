import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContactsFilter,
  getContactsState,
} from '../../redux/Contacts/ContactsSelectors';
import { filterContacts } from 'redux/Contacts/ContactsSlice.js';
import {
  InputFilter,
  LabelFilter,
  ButtonPlus,
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
        <ButtonPlus
          onClick={() => {
            openModal();
          }}
          aria-label="open modal"
        >
          <ButtonImg src={Icon} alt="Plus" />
        </ButtonPlus>
      )}
      {contacts.length > 0 && (
        <>
          <LabelFilter>
            Find contacts by name
            <InputFilter
              type="text"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={filterValue || ''}
              onChange={handleFilterChange}
              placeholder="Name"
            />
          </LabelFilter>
        </>
      )}
    </>
  );
}

export default FilterContactsForm;
