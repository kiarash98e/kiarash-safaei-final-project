/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {useSelector} from 'react-redux'
import {Header,Footer, ShowOption} from '../../components/HomeComponent'
import Category from '../../components/Category/Category'
import AllProduct from '../../components/AllProduct/AllProduct'
import FilterProduct from '../../components/FilterProduct/FilterProduct'


function Product() {
    const products = useSelector((state:any) => state.products.Data)
    

   return (
        <>
            <Header/>   
            <div className="py-3">
                <Category/>
                <div className="row">
                    <div className="col-3">
                        <FilterProduct/>
                    </div>
                    <div className="col-9">
                        
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
