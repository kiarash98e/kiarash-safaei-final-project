/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react'
import Product from '../Product/Product'
import {Col,Container,Row} from 'react-bootstrap'
import SortPrice from '../SortPrice/SortPrice'

const AllProduct:React.FC<any> = ({products}) => {
    
    const [orderProduct, setOrderProduct] = React.useState<any>([])
    console.log(orderProduct)
    return (
        <>
           <div className="py-5">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h4 className='h-4'>فروشگاه</h4>
                            <div className="my-3">
                                <SortPrice setOrderProduct={setOrderProduct}/>
                            </div>
                            <div className="row">
                                {
                                    orderProduct.length > 0 ? (
                                        orderProduct && orderProduct.map((product: any)=>{
                                            return(
                                                <div className="col-12 col-md-6 col-xl-3 mx-auto pt-4"
                                                    key={product._id}
    
                                                >
                                                    <Product product={product}/>
                                                </div>
                                            )
                                        })
                                    ):(
                                        products && products.map((product: any)=>{
                                            return(
                                                <div className="col-12 col-md-6 col-xl-3 mx-auto pt-4"
                                                    key={product._id}
    
                                                >
                                                    <Product product={product}/>
                                                </div>
                                            )
                                        })
                                    )
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div> 
        </>
    )
}

export default AllProduct
