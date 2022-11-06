import { createAsyncThunk } from '@reduxjs/toolkit';
import { UsersApi } from '../../api/Api';
import { toast } from 'react-toastify';
import { FcContacts } from 'react-icons/fc';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const response = await UsersApi.getContact();
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
      const response = await UsersApi.addContact(contact);
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
      await UsersApi.deleteContact(id);
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
      await UsersApi.updateContact(contact);
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
