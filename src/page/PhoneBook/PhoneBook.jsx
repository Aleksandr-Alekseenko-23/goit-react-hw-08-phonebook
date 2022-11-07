import { IoReturnDownBackSharp } from 'react-icons/io5';
import AddContactsForm from '../../components/AddContactsForm/AddContactsForm';
import Contacs from '../../components/Contacts/Contacs';
import FilterContactsForm from '../../components/FilterContactsForm/FilterContactsForm';
import {
  TitleOne,
  Wrapper,
  WrapperContact,
  BackButton,
  WrapperModal,
} from './PhoneBook.styled.js';
import useMatchMedia from '../../hooks/UseMatchMedia';
import useToggleModal from '../../hooks/UseToggleModal';
import Modal from '../../components/Modal/Modal';

export const PhoneBook = () => {
  const { isMobile } = useMatchMedia();
  const { isOpen, openModal, closeModal } = useToggleModal();
  return (
    <>
      <TitleOne>Phonebook</TitleOne>
      <Wrapper>
        {!isOpen ? (
          <>{!isMobile && <AddContactsForm />}</>
        ) : (
          <>
            {isMobile && (
              <Modal>
                <WrapperModal>
                  <BackButton type="button" onClick={() => closeModal()}>
                    <IoReturnDownBackSharp color="white" size={40} />
                  </BackButton>
                  <AddContactsForm />
                </WrapperModal>
              </Modal>
            )}
          </>
        )}
        <WrapperContact>
          <FilterContactsForm openModal={openModal} />
          <Contacs />
        </WrapperContact>
      </Wrapper>
    </>
  );
};

export default PhoneBook;
