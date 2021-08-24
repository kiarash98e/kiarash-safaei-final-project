import React from 'react'
import { Header, ShowOption } from '../../components/HomeComponent'
import CartPage from '../../components/CartPage/CartPage'
import { Footer } from '../../components/HomeComponent'

function Cart() {
    return (
        <>
            <Header/>
            <CartPage/>
            <ShowOption/>
            <Footer/>
        </>
    )
}

export default Cart
