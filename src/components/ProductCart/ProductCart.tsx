/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {OverlayTrigger,Tooltip} from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa';
const ProductCart = () => {
    return (
        <>
            <OverlayTrigger
                key={'button'}
                
                placement='bottom'
                overlay={
                    <Tooltip id={`tooltip-${'button'}`}>
                        <div className='d-flex p-2' style={{width:'12rem'}}>
                            <div className="img-cart"></div>
                            <div className="cart-body">
                                <div className="title">پیراهن آبی</div>
                                <div className="price">
                                    <span>قیمت :</span>
                                    <span>30.000 $</span>
                                </div>
                            </div>
                            <button className="btn-delet-cart btn" style={{color:'#f00'}}>حذف</button>
                        </div>
                    </Tooltip>
                }
                delay={{show:300,hide:2000}}
                >
                <a href='#' style={{textDecoration:'none',color:'#E59C2C',display: 'inline-block',
                }}><FaShoppingCart/></a>
                </OverlayTrigger>
           
        </>
    );
}

export default ProductCart;
