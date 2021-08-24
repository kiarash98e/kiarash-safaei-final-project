
import {Applay_Coupon} from '../Action/ItemAction'

const initialState = ''
const couponReducer = (state=initialState,action) =>{
    switch (action.type) {
        case Applay_Coupon:
            return action.payload
        default:
            return state
    }

}

export default couponReducer