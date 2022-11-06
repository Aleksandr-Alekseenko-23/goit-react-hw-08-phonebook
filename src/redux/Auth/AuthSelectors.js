export const getUsername = state => state.auth.user.name;
export const getUseremail = state => state.auth.user.email;
export const getIsLoggetIn = state => state.auth.isLoggedIn;
export const getToken = state => state.auth.token;
export const selectIsFetchingCurrent = state =>
  state.auth.selectIsFetchingCurrent;
export const getErrorAuth = state => state.auth.error;
