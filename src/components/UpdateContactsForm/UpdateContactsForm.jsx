import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateContacts } from '../../redux/Contacts/ContactsOperations';
import {
  Backdrop,
  FormModal,
  FormLabel,
  FormInput,
  ButtonSaveUpdate,
  ButtonCloseModal,
  ButtonImg,
  ButtonIcon,
} from './UpdateContactsForm.styled';

import Icon from '../../Assets/img/plus.svg';
import Close from '../../Assets/img/Delete.svg';

export const UpdateContactsForm = ({ contactToUpdate, closeForm }) => {
  const [name, setName] = useState(contactToUpdate.name);
  const [number, setNumber] = useState(contactToUpdate.number);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscape);
      const body = document.querySelector('body');
      body.style.overflow = 'auto';
    };
  });

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateContacts({ ...contactToUpdate, name, number }));
    closeForm();
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeForm();
    }
  };

  const handleEscape = e => {
    if (e.code === 'Escape') {
      closeForm();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <FormModal onSubmit={handleSubmit}>
        <ButtonCloseModal type="button" onClick={closeForm}>
          <ButtonImg src={Close} alt="Close" width="32" />
        </ButtonCloseModal>
        <FormLabel>
          Contact name
          <FormInput
            type="text"
            required
            name="name"
            value={name}
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel>
          Phone number
          <FormInput
            type="tel"
            required
            name="number"
            value={number}
            onChange={handleChange}
          />
        </FormLabel>
        <ButtonSaveUpdate type="submit">
          <ButtonIcon src={Icon} alt="Plus" />
        </ButtonSaveUpdate>
      </FormModal>
    </Backdrop>
  );
};
