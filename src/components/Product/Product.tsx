import React from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {FaPlus} from 'react-icons/fa'
import {addItemToCart} from '../../Action/ItemAction'
import {Container,Col,Row,Button,Card} from 'react-bootstrap'
import './Product.style.css'


const Product:React.FC<any> = ({product}) => {
    const dispatch = useDispatch()
    return (
        <>
           <Container>
                <Row>
                    <Col xs={12}>
                        <div className="row pt-4">
                            <Card className="shadow rounded-3 border-0 pt-3 mt-3">
                                <Link to={`/products/${product._id}`}>
                                    <Card.Img variant='top' src={product.image} className='rounded-3' alt={product.name} style={{
                                        height:'200px',
                                        width:'100%',
                                        margin:0,
                                        padding:0,
                                    }}/>
                                </Link>
                                <Card.Body className="d-flex flex-column pt-2">
                                    <Card.Subtitle className="my-2 text-sub" style={{fontSize:'.8rem'}}>{product.subCategory}</Card.Subtitle>
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
                    </Col>
                </Row>
            </Container> 
        </>
    )
}

export default Product
