import React from 'react'
import {useDispatch} from 'react-redux'
import {addItemToCart} from '../../Action/ItemAction'
import {Col,Container,Row} from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'

function SingleProduct(singleProduct:any) {
    const dispatch = useDispatch()
    console.log(singleProduct.image)
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12}>
                    <div className="row">
                            <div className="col-12 col-md-4" style={{height:'10rem'}}>
                                <img src={singleProduct.image} alt={singleProduct.name} />
                            </div>
                            <div className="col-12 col-md-8 px-4">
                                <div className="col-12 col-md-6 py-3">
                                    <div className="row d-flex justify-content-between">
                                        <span>نام :</span>
                                        <span>{singleProduct.name}</span>
                                    </div>
                                    <div className="row d-flex justify-content-between">
                                        <span>دسته بندی :</span>
                                        <span>{singleProduct.subCategory}</span>
                                    </div>
                                    <div className="row d-flex justify-content-between">
                                        <span>امتیاز :</span>
                                        <span>{singleProduct.rating}</span>
                                    </div>
                                    {
                                        singleProduct.size ? 
                                        <div className="row d-flex justify-content-between">
                                            <span>سایز :</span>
                                            <span>
                                                <select name={singleProduct.name} id={`${singleProduct._id}`}>
                                                    {
                                                        singleProduct.size.map( (size:any) => 
                                                            <option value={size}>size</option>
                                                        )
                                                    }
                                                </select>
                                            </span>
                                        </div>
                                        :null
                                    }
                                    {
                                        singleProduct.color ? 
                                        <div className="row d-flex justify-content-between">
                                            <span>سایز :</span>
                                            <span>
                                                <select name={singleProduct.name} id={`${singleProduct._id}`}>
                                                    {
                                                        singleProduct.color.map( (color:any) => 
                                                            <option value={color}>color</option>
                                                        )
                                                    }
                                                </select>
                                            </span>
                                        </div>
                                        :null
                                    }
                                </div>
                                <div className="col-12 col-md-6">
                                    <footer>
                                        <button className="btn add-cart-btn" onClick={() => dispatch(addItemToCart(singleProduct._id))}>
                                            <FaPlus/>
                                            افزودن به سبد خرید
                                        </button>
                                    </footer>
                                </div>
                            </div>
                        </div>
                   
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SingleProduct
