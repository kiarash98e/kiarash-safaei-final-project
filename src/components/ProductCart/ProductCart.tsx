/* eslint-disable array-callback-return */

import React from 'react';
import {CloseButton, OverlayTrigger,Tooltip} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { FaMinus, FaPlus } from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import {increasItem,removeItem,cleanCart} from '../../Action/ItemAction'
import './ProductCart.style.css'
import TotalPrice from '../TotalPrice/TotalPrice';

const ProductCart = () => {
    const cart = useSelector((state:any) => state.products.cart)
    console.log(cart.map((item:any) => item._id))
    const dispatch = useDispatch()
    const totalPrice = useSelector((state:any) => state.products.total)
    console.log(totalPrice)
    return (
        <>
            <OverlayTrigger
                key={'button'}
                
                placement='bottom'
                overlay={
                    <Tooltip id={`tooltip-${'button'}`} className='tooltip mt-2 rounded-2'  style={{width:'20rem',margin:0,zIndex:99,backgroundColor:'#333',color:'#ffe8d6'}}>
                    {
                        cart.length > 0 ? (
                            cart.map((cart:any) => (
                                <div className='row' style={{height:'auto',width:'100%',padding:'10px',margin:0,backgroundColor:'#333'}}>
                                    <div className='d-flex justify-content-between w-100 p-2 m-0' style={{width:"100%",backgroundColor:'transparent'}}>
                                        <div className="img-cart">
                                            <img src={cart.image} style={{width:'3rem'}} alt={cart.name} />
                                        </div>
                                        <div className="cart-info pt-1 pr-4" style={{width:'15rem'}}>
                                            <div className="row p-0 m-0">
                                                <div className="title col-12 text-light" style={{width:'12rem'}} >{cart.name}</div>
                                                <div className="price col-12 pt-2" style={{fontSize:'.8rem',width:'10rem'}}>
                                                    <span>قیمت :</span>
                                                    <span className='ps-2' >{cart.price} تومان</span>
                                                </div>
                                                <div className="count pt-2 col-12 d-flex">
                                                    <button className="btn btn-light text-dark" onClick={() => dispatch(increasItem(cart._id))}><FaPlus/></button>
                                                    <span className='ps-1 pe-1 pt-2 align-middle'>{cart.quantity}</span>
                                                    <button className="btn btn-light text-dark" onClick={() => dispatch(removeItem(cart._id))}><FaMinus/></button>
                                                </div>
                                            </div>
                                        </div>
                                        <CloseButton 
                                            onClick={() => dispatch(cleanCart(cart._id))}
                                            color='#f00'
                                            variant='white'
                                        />
                                        
                                        </div>
                                    <div>
                                </div>
                            </div>
                       
                            ))
                        ):
                        <div style={{width:'10rem',textAlign:'center'}}>سبد خرید خالی است</div>
                        
                    }
                    <div className="row" style={{
                         height:'auto',
                         width:'100%',
                         padding:'10px',
                         margin:0
                     }}>
                         <TotalPrice/>
                     </div>   
                    </Tooltip>
                }
                delay={{show:300,hide:3500}}
                >     
                <Link to={'/cart'} style={{textDecoration:'none',color:'#ffe8d6',display: 'inline-block',
                }}><FaShoppingCart/></Link>
                </OverlayTrigger>
           
        </>
    );
}

export default ProductCart;
