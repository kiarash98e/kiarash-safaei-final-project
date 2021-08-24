/* eslint-disable no-undef */
/* eslint-disable no-fallthrough */
import {
    
    Add_Item_Cart,
    Sub_Item_Cart,
    Increase_Item,
    Filter_Price,
    ORDER_BY_ASC,
    ORDER_BY_DESC,
    CLEAR_ORDER_BY_PRICE,
    Clean_Cart
} from '../Action/ItemAction'
import Data from '../Api/Data'

const initialState = {
    // products:[],
    cart:[],
    Data:Data.productItem,
    total: 0,
    filterPrice:{
        min:"0",
        max:"10000000",
        pricerange:"10000000"
    },
    sort:''
    
}
const productReducr =  (state=initialState,action) => {
    switch (action.type) {
        case Add_Item_Cart:
            {
               const item = state.Data.find(
                   (item) => item._id === action.payload
               )
               const inCart = state.cart.find(
                    (item) => item._id === action.payload ? true:false
               )
               if (inCart) {
                   item.quantity +=1
                   const totalChange = state.total + item.price 
                   return{
                       ...state,
                       total:totalChange
                   }
               }else{
                   item.quantity = 1
                   let newTotal = state.total + item.price 
                   return{
                       ...state,
                       cart:[...state.cart,item],
                       total:state.total + newTotal
                   }
               }
            }
        case ORDER_BY_ASC:
                return{
                    ...state,
                    sort:'asc'
                }
        case ORDER_BY_DESC:
                return {
                    ...state,
                    sort:'desc'
                }
        case CLEAR_ORDER_BY_PRICE:
                return {
                    ...state,
                    sort:''
                }
        case Filter_Price:
            let productPriceFilter = state.priceFilter
            productPriceFilter = {
              ...productPriceFilter,
              pricerange: parseInt(action.payload),
            }
            return {
              ...state,
              priceFilter: productPriceFilter,
            }
        case Sub_Item_Cart:
            const items = state.Data.find(
                (item) => item._id === action.payload
            )
           
            if (items.quantity === 1) {
                let newTotal = state.total - items.price
                const inCart = state.cart.filter(
                    (item) => item._id !== action.payload 
                )
                return {
                    ...state,
                    cart:inCart,
                    total:newTotal
                }
            }else{
                items.quantity -=1
                let newTotal = state.total - items.price * items.quantity
                return{
                    ...state,
                    total:newTotal
                }
            }
        case Increase_Item:
            const item1 = state.Data.find(
                (item) => item._id === action.payload
            )
            item1.quantity +=1
            let newTotal = state.total + item1.price 
            return{
                ...state,
                total:newTotal
            }
        case Clean_Cart:
            const itemS = state.Data.find(
                (item) => item._id === action.payload
            )
            let newTotalS = state.total - (itemS.price * itemS.quantity )
            const inCart = state.cart.filter(
                (item) => item._id !== action.payload 
            )
            return {
                ...state,
                cart: inCart,
                total:newTotalS
            }
    
        default:
           return state
    }
}

export default productReducr
