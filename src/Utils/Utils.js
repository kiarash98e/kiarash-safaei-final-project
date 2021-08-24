
export const Utils = (coupon, totalPrice, items) => {
    if (coupon === 5) {
      return true
    }
    else if(coupon === 10 && totalPrice > 100000) {
      return true
    }
    else if (coupon === 15 && totalPrice > 250000 && items.some((item) => item.category === 1
    || item.category === 2 || item.category === 3)) {
      return true
    }
    else return false
  }