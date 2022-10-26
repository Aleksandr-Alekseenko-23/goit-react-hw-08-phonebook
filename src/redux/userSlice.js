import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContacts,
  deleteContacts,
  updateContacts,
} from './usersOperations';

const userSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getContacts.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [getContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [getContacts.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),

    [addContacts.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = [...state.contacts, action.payload];
    },
    [addContacts.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),

    [deleteContacts.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
    [deleteContacts.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [updateContacts.pending]: state => {
      state.isLoading = true;
    },
    [updateContacts.fulfilled]: (state, { payload }) => {
      const index = state.contacts.findIndex(
        contact => contact.id === payload.id
      );
      state.contacts[index] = payload;
      state.isLoading = false;
    },
    [updateContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const usersReducer = userSlice.reducer;
