import { createAsyncThunk } from '@reduxjs/toolkit';
import { UsersApi } from '../API/Api';

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
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async ({ id }, thunkAPI) => {
    try {
      await UsersApi.deleteContact(id);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateContacts = createAsyncThunk(
  'contacts/updateContacts',
  async (contact, { rejectWithValue }) => {
    try {
      await UsersApi.updateContact(contact);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
