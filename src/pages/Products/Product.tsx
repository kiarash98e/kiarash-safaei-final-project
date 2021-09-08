/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {useSelector} from 'react-redux'
import {Header,Footer, ShowOption} from '../../components/HomeComponent'
import Category from '../../components/Category/Category'
import AllProduct from '../../components/AllProduct/AllProduct'


function Product() {
    const products = useSelector((state:any) => state.products.Data)
    

   return (
        <>
            <Header/>   
            <div className="py-3">
                <Category/>
                <div className="row">
                    
                    <div className="col-12">
                        
                        <AllProduct products={products}/>    
                    </div>    
                </div>    
            </div> 
            <ShowOption/> 
            <Footer/>   
        </>
    )
}

export default Product
