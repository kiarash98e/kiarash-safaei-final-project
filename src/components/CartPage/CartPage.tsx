/* eslint-disable array-callback-return */
import { CloseButton } from 'react-bootstrap'
import { FaMinus, FaPlus } from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import {removeItem,cleanCart,increasItem} from '../../Action/ItemAction'
import './CartPage.style.css'

function CartPage() {
    const cart = useSelector((state:any) => state.products.cart)
    const dispatch = useDispatch()
    const totalPrice = useSelector((state:any) => state.products.total)
    return (
        <div>
           <div className="container">
                <div className="row">
                    <div className="col-12 p-3">
                        <h2>سبد خرید </h2>
                        <div className="container-fluid pt-5">
                            <div className="row p-3">
                                <div className="col-12 col-md-8 border-cart p-3" style={{height:'70vh',overflowY:'scroll'}}>
                                    {
                                        cart.length > 0 ? (
                                            cart.map((item:any) => (
                                                <div className="row " key={item._id}>
                                                    <div className="d-flex">
                                                        <div className="img-box">
                                                            <img 
                                                                src={item.image} 
                                                                alt={item.name}
                                                                className="img-cart" 
                                                            />
                                                        </div>
                                                        <div className="cart-name p-2">
                                                            <p>{item.name}</p>
                                                            <p className='pt-1'>
                                                                <span>قیمت :</span>
                                                                <span>{item.price} تومان</span>
                                                            </p>
                                                            <div className="count-box">
                                                                <span onClick={() => dispatch(increasItem(item._id))}><FaPlus/></span>
                                                                <span >{item.quantity}</span>
                                                                <span onClick={() => dispatch(removeItem(item._id))}><FaMinus/></span>
                                                            </div>
                                                        </div>
                                                        <div className="remove-cart">
                                                            <CloseButton
                                                                onClick={() => dispatch(cleanCart(item._id))}
                                                                style={{
                                                                    color:'#f00',
                                                                    fontSize:'2rem'
                                                                }}
                                                                className='btn-delet-cart'
                                                            />
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ):(
                                            <div>سبد خرید خالی است</div>
                                        )
                                    }
                                </div>
                                <div className="col-12 col-md-1"></div>
                                <div className="col-12 col-md-3 mt-3 border-cart" style={{height:'15rem'}}>
                                    <div className="d-flex"> 
                                        <div className="row">
                                            <div className="col-12 pt-3">
                                                <span>قیمت اولیه : </span>
                                                <span className='me-3'>{totalPrice} تومان</span>
                                            </div>
                                            <div className="col-12 pt-3">
                                                <span>تخفیف : </span>
                                                <span className='me-3'>{""}</span>
                                            </div>
                                            <div className="col-12 pt-3">
                                                <span>قیمت نهایی : </span><span className='me-3'>{totalPrice} تومان</span>
                                            </div>
                                            <div className="col-12 pt-3">
                                                <div className="btn btn-block btn-success btn-prdakht">پرداخت</div>
                                            </div>
                                        </div>
                                    </div>                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

/*
                                                <div className="d-flex"> 
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <span>قیمت اولیه : </span>
                                                            <span>{totalPrice}</span>
                                                        </div>
                                                        <div className="col-12">
                                                            <span>تخفیف : </span>
                                                            <span>{""}</span>
                                                        </div>
                                                        <div className="col-12">
                                                            <span>قیمت نهایی : </span><span>{totalPrice}</span>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="btn">پرداخت</div>
                                                        </div>
                                                    </div>
                                                </div>
                                           
*/

export default CartPage