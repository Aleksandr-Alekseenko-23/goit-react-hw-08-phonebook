import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { filterContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
