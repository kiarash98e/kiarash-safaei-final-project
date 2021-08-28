import {HIDE_TOAST,SHOW_TOAST} from '../Action/Toast'

const initialState = {
    show: false,
    title: '',
    text: '',
  }
  
  const toastReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SHOW_TOAST:
        return {
          ...state,
          show: true,
          title: payload.title,
          text: payload.text,
        }
      case HIDE_TOAST:
        return {
          ...state,
          show: false,
          title: '',
          text: '',
        }
      default:
        return state
    }
  }


  export default toastReducer