import _ from 'lodash';
import {showToast} from './Toast'

export const GOOGLE_AUTH_SUCCESS = 'GOOGLE_AUTH_SUCCESS'
export const GET_GOOGLE_USER = 'GET_GOOGLE_USER'
export const LOGOUT_GOOGLE_USER = 'LOGOUT_GOOGLE_USER'

export const REGISTER_LOCAL_USER = 'REGISTER_LOCAL_USER'
export const LOGIN_LOCAL_USER = 'LOGIN_LOCAL_USER'
export const LOGOUT_LOCAL_USER = 'LOGOUT_LOCAL_USER'
export const GET_LOCAL_USER = 'GET_LOCAL_USER'
export const REDIRECT_AFTER_LOGIN = 'REDIRECT_AFTER_LOGIN'




export const setGoogleUser = googleUser => dispatch => {
  dispatch(logoutLocalUser());
  localStorage.setItem('googleUser', JSON.stringify(googleUser));
  dispatch(
    showToast({
      title: 'Notification',
      text: `Google user ${googleUser.name} successfully logged in.`,
    }),
  );
  dispatch({
    type: GOOGLE_AUTH_SUCCESS,
    payload: googleUser,
  });
};

export const getGoogleUser = () => {
  const googleUser = JSON.parse(localStorage.getItem('googleUser'));

  return {
    type: GET_GOOGLE_USER,
    payload: googleUser,
  };
};

export const logOutGoogleUser = () => dispatch => {
  const googleUser = JSON.parse(localStorage.getItem('googleUser'));
  if (googleUser) {
    dispatch(
      showToast({
        title: 'Notification',
        text: `Google user ${googleUser.name} successfully logged out.`,
      }),
    );
    localStorage.removeItem('googleUser');
    dispatch({
      type:LOGOUT_GOOGLE_USER,
    });
  }
};

export const registerLocalUser = localUser => dispatch => {
  dispatch(logOutGoogleUser());
  // delete localUser.password;
  delete localUser.repeatPassword;
  localStorage.setItem('localUser', JSON.stringify(localUser));

  dispatch(
    showToast({
      title: 'Notification',
      text: `Local user ${localUser.name} successfully registered.`,
    }),
  );
  dispatch({
    type: REGISTER_LOCAL_USER,
    payload: localUser,
  });
};

export const loginLocalUser = _localUser => (dispatch, getState) => {
  dispatch(logOutGoogleUser());

  let localUser = { ...getState().authReducer.localUser };
  localUser = _.isEmpty(localUser) ? null : localUser;
  if (
    !localUser &&
    _localUser.email === 'default@gmail.com' &&
    _localUser.password === 'password'
  ) {
    const defaultUser = {
      name: 'DefaultName',
      email: 'default@gmail.com',
      password: 'password',
    };
    localUser = defaultUser;
  }
  if (localUser) {
    localStorage.setItem('localUser', JSON.stringify(localUser));
    dispatch(
      showToast({
        title: 'Notification',
        text: `Local user ${localUser.email} successfully logged in.`,
      }),
    );
  } else {
    dispatch(
      showToast({
        title: 'Error',
        text: `Wrong email or password.`,
      }),
    );
  }
  dispatch({
    type: LOGIN_LOCAL_USER,
    payload: localUser,
  });
};

export const logoutLocalUser = () => (dispatch, getState) => {
  const localUser = JSON.parse(localStorage.getItem('localUser'));
  if (localUser) {
    localStorage.removeItem('localUser');

    dispatch(
      showToast({
        title: 'Notification',
        text: `Local user ${localUser.name} successfuly logged out.`,
      }),
    );
    dispatch({
      type: LOGOUT_LOCAL_USER,
    });
  }
};

export const getLocalUser = () => {
  const localUser = JSON.parse(localStorage.getItem('localUser'));

  return {
    type: GET_LOCAL_USER,
    payload: localUser,
  };
};

export const redirectAfterLogin = callback => {
  if (callback) callback();

  return {
    type: REDIRECT_AFTER_LOGIN,
  };
};