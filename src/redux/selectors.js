export const getUsers = state => state.contacts.contacts;

export const getUsersFilter = state => state.filter.filter;

export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getUsername = state => state.user.name;
export const getUseremail = state => state?.user?.email;
export const getIsLoggetIn = state => state.auth.isLoggetIn;
