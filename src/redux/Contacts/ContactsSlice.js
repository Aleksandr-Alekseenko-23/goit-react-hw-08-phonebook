import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContacts,
  deleteContacts,
  updateContacts,
} from './ContactsOperations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [getContacts.pending]: handlePending,
    [getContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [getContacts.rejected]: handleRejected,

    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = [...state.contacts, action.payload];
    },
    [addContacts.rejected]: handleRejected,

    [deleteContacts.pending]: handlePending,
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
    [deleteContacts.rejected]: handleRejected,
    [updateContacts.pending]: handlePending,
    [updateContacts.fulfilled]: (state, { payload }) => {
      const index = state.contacts.findIndex(
        contact => contact.id === payload.id
      );
      state.contacts[index] = payload;
      state.isLoading = false;
    },
    [updateContacts.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { filterContacts } = contactsSlice.actions;
