import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {Container,Col,Row,Card,Button} from 'react-bootstrap'
import { Footer, Header, ShowOption } from '../../components/HomeComponent';
import {Link} from 'react-router-dom'
import '../Men/Men.css'

import {addItemToCart} from '../../Action/ItemAction'
import {FaPlus} from 'react-icons/fa'

function Women() {
    const  products  = useSelector((state) => state.products.Data)
    const dispatch = useDispatch()  
    const WomenProducts = products.filter(product => product.category === 2)
    console.log(WomenProducts)

    return (
        <>  
            <Header/>
            <div className="py-5">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h4 className='h-4'>فروشگاه زنانه</h4>
                            <div className="row">
                                {
                                    WomenProducts && WomenProducts.map((product)=>{
                                        return(
                                            <div className="col-12 col-md-6 col-lg-3 mx-auto pt-5"

                                            >
                                                <Card className="rounded-3 border-0 p-3 shadow">
                                                    <Link to={`/products/${product._id}`}>
                                                        <Card.Img variant='top' src={product.image} className='rounded-3' alt={product.name} style={{
                                                            height:'200px',
                                                            width:'100%',
                                                            margin:0,
                                                            padding:0,
                                                        }}/>
                                                    </Link>
                                                    <Card.Body className="d-flex flex-column pt-2">
                                                        <Card.Subtitle className="my-2 text-muted" style={{color:'#999'}}>{product.subCategory}</Card.Subtitle>
                                                        <Card.Title className="my-2" style={{fontSize:'1rem', color:'#6b705c'}}>{product.name}</Card.Title>
                                                        <Card.Text className="pt-3" style={{fontSize:'12px',marginRight:'auto'}}>
                                                        {product.price} تومان
                                                        </Card.Text>
                                                    </Card.Body>
                                                    <Button
                                                        className='btn-add p-2 mb-3 text-center border-0'  
                                                        onClick={()=> dispatch(addItemToCart(product._id))} 
                                                        size='lg'
                                                    >
                                                        <FaPlus className='ml-2'/> افزودن سبد خرید
                                                    </Button>
                                                </Card>
                         
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div> 
            <ShowOption/>
            <Footer/>
        </>
    )
}

export default Women
