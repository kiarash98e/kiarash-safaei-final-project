import {GOOGLE_AUTH_SUCCESS,GET_GOOGLE_USER,LOGIN_LOCAL_USER,REDIRECT_AFTER_LOGIN,REGISTER_LOCAL_USER,LOGOUT_GOOGLE_USER,LOGOUT_LOCAL_USER} from '../Action/Auth'

const initialState = {
  googleUser: null,
  localUser: null,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GOOGLE_AUTH_SUCCESS:
      return {
        ...state,
        googleUser: { ...payload },
      }
    case GET_GOOGLE_USER:
      return {
        ...state,
        googleUser: payload,
      }
    case LOGOUT_GOOGLE_USER:
      return {
        ...state,
        googleUser: null,
      }
    case REGISTER_LOCAL_USER:
      return {
        ...state,
        localUser: { ...payload },
      }
    case LOGIN_LOCAL_USER:
      return {
        ...state,
        localUser: payload,
      }
    case LOGOUT_LOCAL_USER:
      return {
        ...state,
        localUser: null,
      }
    case GET_LOCAL_USER:
      return {
        ...state,
        localUser: payload,
      }
    case REDIRECT_AFTER_LOGIN:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default authReducer