import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import {
  List,
  Wrapper,
  Item,
  Span,
  ButtonDelete,
  ButtonEdit,
  Img,
  AvatarWrappen,
  TextPib,
} from './Contacs.styled.js';
import Delete from './../../Assets/img/Delete.svg';
import Edit from './../../Assets/img/pen.png';
import { deleteContacts, getContacts } from '../../redux/usersOperations';
import {
  getUsers,
  getUsersFilter,
  getIsLoading,
  getError,
  getIsLoggetIn,
  getToken,
} from '../../redux/selectors';
import Loader from 'components/Loader/Loader.jsx';
import { UpdateContactsForm } from '../UpdateContactsForm/UpdateContactsForm';

function Contacs() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getUsers);
  const userFilter = useSelector(getUsersFilter);
  const isLoggedIn = useSelector(getIsLoggetIn);
  const token = useSelector(getToken);

  const [contactToUpdate, setContactToUpdate] = useState(null);

  useEffect(() => {
    token && isLoggedIn && dispatch(getContacts());
  }, [token, isLoggedIn, dispatch]);

  const filterContactsFunction = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(userFilter.toLowerCase())
    );
  };

  const showUpdateForm = userId => {
    const contact = contacts.find(({ id }) => id === userId);
    setContactToUpdate(contact);
  };

  const closeForm = () => {
    setContactToUpdate(null);
  };

  return (
    <Wrapper>
      {isLoading && contacts.length === 0 ? (
        <Loader />
      ) : (
        <List>
          {filterContactsFunction().map(({ name, number, id }) => {
            return (
              <Item key={id}>
                <AvatarWrappen>
                  <Avatar size="25" name={name} round={true} />
                </AvatarWrappen>
                <TextPib> {name}</TextPib>
                <Span>{number}</Span>
                <ButtonEdit
                  onClick={() => {
                    showUpdateForm(id);
                  }}
                >
                  <Img src={Edit} alt="Edit" width="512" />
                </ButtonEdit>
                {contactToUpdate && contactToUpdate.id === id && (
                  <UpdateContactsForm
                    contactToUpdate={contactToUpdate}
                    closeForm={closeForm}
                  />
                )}
                <ButtonDelete
                  type="button"
                  onClick={() => {
                    dispatch(deleteContacts({ id }));
                  }}
                >
                  <Img src={Delete} alt="Delete" />
                </ButtonDelete>
              </Item>
            );
          })}
        </List>
      )}
      {error && <p>{error}</p>}
    </Wrapper>
  );
}

export default Contacs;
