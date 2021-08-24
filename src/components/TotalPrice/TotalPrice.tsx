import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './TotalPrice.style.css'

function TotalPrice() {
    const cart = useSelector((state:any) => state.products.cart)
    console.log(cart.map((item:any) => item._id))
    const totalPrice = useSelector((state:any) => state.products.total)
    console.log(totalPrice)
    return (
        <>
            <div className="d-flex justify-content-between w-100">
                <div className="price d-flex justify-content-between pt-2" style={{width:'11rem'}}>
                    <span style={{width:'4rem'}}>قیمت کل : </span>
                                            
                    <span style={{width:'7rem'}}>{totalPrice} تومان</span>
                </div>
                <Link to={'/cart'}>
                                            
                    <button className="btn btn-complate ms-4 me-0" >تکمیل خرید</button>
                </Link>
            </div>                     
                    
        </>
    )
}

export default TotalPrice
