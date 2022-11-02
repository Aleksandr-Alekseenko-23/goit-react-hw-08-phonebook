import { ToastContainer } from 'react-toastify';
import AddForm from '../../components/AddForm/AddForm';
import Contacs from '../../components/Contacts/Contacs';
import FilterContact from '../../components/FilterContact/FilterContact';
import { IoReturnDownBackSharp } from 'react-icons/io5';
import {
  TitleOne,
  Wrapper,
  WrapperContact,
  BackButton,
  WrapperModal,
} from './PhoneBook.styled.js';
import useMatchMedia from 'hooks/useMatchMedia';
import useToggleModal from 'hooks/useToggleModal/useToggleModal';
import Modal from '../../components/Modal/Modal';

export const PhoneBook = () => {
  const { isMobile } = useMatchMedia();
  const { isOpen, openModal, closeModal } = useToggleModal();
  return (
    <>
      <TitleOne>Phonebook</TitleOne>
      <ToastContainer autoClose={3000} />
      <Wrapper>
        {!isOpen ? (
          <>{!isMobile && <AddForm />}</>
        ) : (
          <>
            {isMobile && (
              <Modal>
                <WrapperModal>
                  <BackButton type="button" onClick={() => closeModal()}>
                    <IoReturnDownBackSharp color="white" size={40} />
                  </BackButton>
                  <AddForm />
                </WrapperModal>
              </Modal>
            )}
          </>
        )}
        <WrapperContact>
          <FilterContact openModal={openModal} />
          <Contacs />
        </WrapperContact>
      </Wrapper>
    </>
  );
};

export default PhoneBook;
