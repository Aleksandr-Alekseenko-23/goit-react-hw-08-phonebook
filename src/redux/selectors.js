export const getUsers = state => state.contacts.contacts;

export const getUsersFilter = state => state.filter.filter;

export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getUsername = state => state.auth.user.name;
export const getUseremail = state => state.auth.user.email;
export const getIsLoggetIn = state => state.auth.isLoggedIn;
export const getToken = state => state.auth.token;
export const selectIsFetchingCurrent = state =>
  state.auth.selectIsFetchingCurrent;
