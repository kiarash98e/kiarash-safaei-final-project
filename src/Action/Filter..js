export const SET_TEXT_FILTER = 'SET_TEXT_FILTER'
export const SET_CHECKBOX_FILTER = 'SET_CHECKBOX_FILTER'
export const REMOVE_CHECKBOX_FILTER = 'REMOVE_CHECKBOX_FILTER'
export const CLEAR_FILTERS = 'CLEAR_FILTERS'

export const setTextFilter = (name) => dispatch => dispatch({
    type: 'SET_TEXT_FILTER',
    name
  })
  
  export const setCheckboxFilter = (brand) => dispatch => dispatch({
    type: 'SET_CHECKBOX_FILTER',
    brand
  })
  
  export const removeCheckboxFilter = (brand) => dispatch => dispatch({
    type: 'REMOVE_CHECKBOX_FILTER',
    brand
  })
  
  export const clearFilters = () => dispatch => dispatch({
    type: 'CLEAR_FILTERS'
  })
  