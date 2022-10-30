import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersFilter, getUsers } from '../../redux/selectors';
import { filterUsers } from 'redux/filtersSlice.js';
import {
  InputPhoneBook,
  LabelPhoneBook,
  Button,
  ButtonImg,
} from './FilterContact.styled.js';
import useMatchMedia from 'hooks/useMatchMedia';
import Icon from '../../Assets/img/plus.svg';

function FilterContact({ openModal }) {
  const dispatch = useDispatch();
  const { isMobile } = useMatchMedia();
  const filterValue = useSelector(getUsersFilter);
  const contacts = useSelector(getUsers);
  const handleFilterChange = ({ target: { value } }) =>
    dispatch(filterUsers(value));
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
        <div>
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
        </div>
      )}
    </>
  );
}

export default FilterContact;
