import { ToastContainer } from 'react-toastify';
import AddForm from '../../components/AddForm/AddForm';
import Contacs from '../../components/Contacts/Contacs';
import FilterContact from '../../components/FilterContact/FilterContact';
import { TitleOne, Wrapper, WrapperContact } from './PhoneBook.styled.js';

export const PhoneBook = () => {
  return (
    <>
      <TitleOne>Phonebook</TitleOne>
      <ToastContainer autoClose={3000} />
      <Wrapper>
        <AddForm />
        <WrapperContact>
          <FilterContact />
          <Contacs />
        </WrapperContact>
      </Wrapper>
    </>
  );
};

export default PhoneBook;
