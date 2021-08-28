export const SHOW_TOAST = 'SHOW_TOAST'
export const HIDE_TOAST = 'HIDE_TOAST'
  
export const showToast = data => ({
    type: SHOW_TOAST,
    payload: data,
  });
  
  export const hideToast = () => ({
    type: HIDE_TOAST,
  });