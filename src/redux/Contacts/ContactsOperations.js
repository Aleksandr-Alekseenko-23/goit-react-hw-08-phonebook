import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsApi } from '../../contactsApi/Api';
import { toast } from 'react-toastify';
import { FcContacts } from 'react-icons/fc';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const response = await ContactsApi.getContact();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const response = await ContactsApi.addContact(contact);
      toast.success(`Contact successfully added to the list`, {
        icon: <FcContacts size={25} color="green" />,
      });
      return response;
    } catch (e) {
      toast.error('Oops, try reloading the page');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async ({ id }, thunkAPI) => {
    try {
      await ContactsApi.deleteContact(id);
      toast.error(`Сontact successfully removed from the list`, {
        icon: <FcContacts size={25} color="red" />,
      });
      return id;
    } catch (e) {
      toast.error('Oops, try reloading the page');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContacts = createAsyncThunk(
  'contacts/updateContacts',
  async (contact, { rejectWithValue }) => {
    try {
      await ContactsApi.updateContact(contact);
      toast.success(`Contact updated successfully`, {
        icon: <FcContacts size={25} color="green" />,
      });
      return contact;
    } catch (error) {
      toast.error('Oops, try reloading the page');
      return rejectWithValue(error);
    }
  }
);
