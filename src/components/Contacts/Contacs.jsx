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
  AvatarWrapper,
  TextPib,
  Title,
  TitleContact,
} from './Contacs.styled.js';
import Delete from './../../Assets/img/Delete.svg';
import Edit from './../../Assets/img/pen.png';
import {
  deleteContacts,
  getContacts,
} from '../../redux/Contacts/ContactsOperations';
import {
  getContactsState,
  getContactsFilter,
  getError,
  getIsLoading,
} from '../../redux/Contacts/ContactsSelectors';
import { getIsLoggetIn, getToken } from '../../redux/Auth/AuthSelectors';
import Loader from 'components/Loader/Loader.jsx';
import { UpdateContactsForm } from '../UpdateContactsForm/UpdateContactsForm';
import useMatchMedia from '../../hooks/UseMatchMedia';

function Contacs() {
  const dispatch = useDispatch();
  const { isMobile } = useMatchMedia();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContactsState);
  const searchContact = useSelector(getContactsFilter);
  const isLoggedIn = useSelector(getIsLoggetIn);
  const token = useSelector(getToken);

  const [contactToUpdate, setContactToUpdate] = useState(null);

  useEffect(() => {
    token && isLoggedIn && dispatch(getContacts());
  }, [token, isLoggedIn, dispatch]);

  const sortAndFilterContactsFunction = () => {
    return [...contacts]
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .filter(({ name }) =>
        name.toLowerCase().includes(searchContact.toLowerCase())
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
        <>
          {contacts.length > 0 ? (
            <>
              <Title>Contacts</Title>
              <List>
                {sortAndFilterContactsFunction().map(({ name, number, id }) => {
                  return (
                    <Item key={id}>
                      <AvatarWrapper>
                        {isMobile ? (
                          <Avatar size="15" name={name} round={true} />
                        ) : (
                          <Avatar size="25" name={name} round={true} />
                        )}
                      </AvatarWrapper>
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
            </>
          ) : (
            <TitleContact>Your contacts will be displayed here</TitleContact>
          )}
        </>
      )}
      {error && <p>{error}</p>}
    </Wrapper>
  );
}

export default Contacs;
