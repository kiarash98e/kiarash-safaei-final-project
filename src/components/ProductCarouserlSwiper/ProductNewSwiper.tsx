import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import 'swiper/swiper-bundle.min.css'
import './ProductCarousel.style.css'
import { FaPlus } from 'react-icons/fa'
import {addItemToCart} from '../../Action/ItemAction'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const style_swiper = {
    marginTop:'3rem',
    height:'28rem'
}

const ProductLikeSwiper = () => {
    const  products  = useSelector((state:any) => state.products.Data)
    const dispatch = useDispatch()
    console.log(products)
    
    const NewSwiper:any= products.filter((product:any) => product.status.map((item:any) => item ==="پرفروش ترین ها"))
    
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Swiper  
                            spaceBetween={10}  
                            speed={500}
                            allowTouchMove={true}
                            slidesPerView={5}
                            navigation
                            scrollbar={{draggable:true}}
                            effect={'fade'}
                            style={style_swiper}
                            breakpoints={{
                                1300:{
                                    width:1300,
                                    slidesPerView: 5,
                                },
                                1000:{
                                    width:1000,
                                    slidesPerView: 3,
                                },
                                780:{
                                    width:780,
                                    slidesPerView:3,
                                },
                                579:{
                                    width:579,
                                    slidesPerView:2,
                                },
                                330:{
                                    width:330,
                                    slidesPerView:1,
                                }

                            }}
                        >
                          {
                            NewSwiper && 
                            NewSwiper.map((product:any) =>(
                            <SwiperSlide key={product._id} className='swiper-item'>
                                <Card className="rounded-3 shadow border-0 p-3">
                                  <Link to={`/products/${product._id}`}>
                                    <Card.Img variant='top' src={product.image} className='rounded-3' alt={product.name} style={{
                                        height:'200px',
                                        width:'100%',
                                        margin:0,
                                        padding:0,
                                    }}/>
                                  </Link>
                                  <Card.Body className="d-flex flex-column pt-2">
                                    <Card.Title className="my-2" style={{fontSize:'1rem'}}>{product.name}</Card.Title>
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
                                
                            </SwiperSlide>
                        
                            ))
                          }
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductLikeSwiper
