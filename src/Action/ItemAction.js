/* eslint-disable no-undef */
export const Add_Item_Cart = 'Add_Item_Cart'
export const Applay_Coupon = 'Applay_Coupon'
export const Sub_Item_Cart = 'Sub_Item_Cart'
export const Increase_Item = 'Increase_Item'
export const Filter_Price = 'Filter_Price'
export const Clean_Cart = 'Clean_Cart' 
export const ORDER_BY_ASC = 'ORDER_BY_ASC'
export const ORDER_BY_DESC = 'ORDER_BY_DESC'
export const CLEAR_ORDER_BY_PRICE = 'CLEAR_ORDER_BY_PRICE'

export const addItemToCart = id => dispatch =>{
    dispatch({
        type: Add_Item_Cart,
        payload: id
    })
}

export const filterPrice = (pricerange) => dispatch => {
    dispatch({
        type:Filter_Price,
        payload: {
            pricerange
        }
    })
}

export const ApplyCoupon = (price,couponText) => dispatch => {
    dispatch({
        type:Applay_Coupon,
        payload:{price,couponText}
    })
}

export const removeItem = (id) => dispatch =>{
    dispatch({    
        type:Sub_Item_Cart,
        payload: id
    })
}

export const cleanCart = (id)=>dispatch => {
    dispatch({
        type: Clean_Cart,
        payload: id
    })
}

export const increasItem = (id) => dispatch =>{
    dispatch({
        type:Increase_Item,
        payload: id
    })
}

export const orderByAsc = () => dispatch => {
    dispatch({
        type: ORDER_BY_ASC
    })
}

export const orderByDesc =  () => dispatch => {
    dispatch({
        type: ORDER_BY_DESC
    })
}

export const clearOrderBy = () => dispatch => {
    dispatch({
        type: CLEAR_ORDER_BY_PRICE
    })
}