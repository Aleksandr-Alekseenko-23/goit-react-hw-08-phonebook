import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import {
  List,
  Wrapper,
  Item,
  Span,
  Button,
  Img,
  AvatarWrappen,
  TextPib,
} from './Contacs.styled.js';
import Delete from './../../Assets/img/Delete.svg';
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

function Contacs() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getUsers);
  const filter = useSelector(getUsersFilter);
  const isLoggedIn = useSelector(getIsLoggetIn);
  const token = useSelector(getToken);

  useEffect(() => {
    token && isLoggedIn && dispatch(getContacts());
  }, [token, isLoggedIn, dispatch]);

  const filterContactsFunction = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
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
                <Button
                  type="button"
                  onClick={() => {
                    dispatch(deleteContacts({ id }));
                  }}
                >
                  <Img src={Delete} alt="Delete" />
                </Button>
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
