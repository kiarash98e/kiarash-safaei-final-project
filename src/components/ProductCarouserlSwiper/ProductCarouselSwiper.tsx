import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Container,Row,Col} from 'react-bootstrap'
import 'swiper/swiper-bundle.min.css'
import { Img3 } from '../Banner/Images'
import './ProductCarousel.style.css'
import { FaPlus } from 'react-icons/fa'


const style_swiper = {
    marginTop:'3rem',
    height:'15rem'
}

const ProductCarouselSwiper = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Swiper  
                            spaceBetween={30}  
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
                                    slidesPerView: 5,
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
                            <SwiperSlide className='swiper-item'>
                                <div className="card rounded-3 border-0">
                                  <div className="card-img-top">
                                      <img src={Img3} style={{height:'100px'}} alt="product img /54ase" />
                                  </div>
                                  <div className="card-body d-flex">
                                    <h6 className="card-title mb-2">کیف چرم</h6>
                                    <p className="card-text mt-1" style={{fontSize:'12px',marginRight:'auto'}}>
                                       2,000 تومان
                                    </p>
                                  </div>
                                  <button className="add-btn-cart btn btn-block text-center p-2"><FaPlus className='ml-2'/> افزودن سبد خرید</button>
                                </div>
                                
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item'>
                                <div className="card rounded-3 border-0">
                                  <div className="card-img-top">
                                      <img src={Img3} style={{height:'100px',width:'100%'}} alt="product img /54ase" />
                                  </div>
                                  <div className="card-body d-flex">
                                    <h6 className="card-title mb-2">کیف چرم</h6>
                                    <p className="card-text mt-1" style={{fontSize:'12px',marginRight:'auto'}}>
                                       2,000 تومان
                                    </p>
                                  </div>
                                  <button className="add-btn-cart btn btn-block text-center p-2"><FaPlus className='ml-2'/> افزودن سبد خرید</button>
                                </div>
                                
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item'>
                                <div className="card rounded-3 border-0">
                                  <div className="card-img-top">
                                      <img src={Img3} style={{height:'100px'}} alt="product img /54ase" />
                                  </div>
                                  <div className="card-body d-flex">
                                    <h6 className="card-title mb-2">کیف چرم</h6>
                                    <p className="card-text mt-1" style={{fontSize:'12px',marginRight:'auto'}}>
                                       2,000 تومان
                                    </p>
                                  </div>
                                  <button className="add-btn-cart btn btn-block text-center p-2"><FaPlus className='ml-2'/> افزودن سبد خرید</button>
                                </div>
                                
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item'>
                                <div className="card rounded-3 border-0">
                                  <div className="card-img-top">
                                      <img src={Img3} style={{height:'100px'}} alt="product img /54ase" />
                                  </div>
                                  <div className="card-body d-flex">
                                    <h6 className="card-title mb-2">کیف چرم</h6>
                                    <p className="card-text mt-1" style={{fontSize:'12px',marginRight:'auto'}}>
                                       2,000 تومان
                                    </p>
                                  </div>
                                  <button className="add-btn-cart btn btn-block text-center p-2"><FaPlus className='ml-2'/> افزودن سبد خرید</button>
                                </div>
                                
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item'>
                                <div className="card rounded-3 border-0">
                                  <div className="card-img-top">
                                      <img src={Img3} style={{height:'100px'}} alt="product img /54ase" />
                                  </div>
                                  <div className="card-body d-flex">
                                    <h6 className="card-title mb-2">کیف چرم</h6>
                                    <p className="card-text mt-1" style={{fontSize:'12px',marginRight:'auto'}}>
                                       2,000 تومان
                                    </p>
                                  </div>
                                  <button className="add-btn-cart btn btn-block text-center p-2"><FaPlus className='ml-2'/> افزودن سبد خرید</button>
                                </div>
                                
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item'>
                                <div className="card rounded-3 border-0">
                                  <div className="card-img-top">
                                      <img src={Img3} style={{height:'100px'}} alt="product img /54ase" />
                                  </div>
                                  <div className="card-body d-flex">
                                    <h6 className="card-title mb-2">کیف چرم</h6>
                                    <p className="card-text mt-1" style={{fontSize:'12px',marginRight:'auto'}}>
                                       2,000 تومان
                                    </p>
                                  </div>
                                  <button className="add-btn-cart btn btn-block text-center p-2"><FaPlus className='ml-2'/> افزودن سبد خرید</button>
                                </div>
                                
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item'>
                                <div className="card rounded-3 border-0">
                                  <div className="card-img-top">
                                      <img src={Img3} style={{height:'100px'}} alt="product img /54ase" />
                                  </div>
                                  <div className="card-body d-flex">
                                    <h6 className="card-title mb-2">کیف چرم</h6>
                                    <p className="card-text mt-1" style={{fontSize:'12px',marginRight:'auto'}}>
                                       2,000 تومان
                                    </p>
                                  </div>
                                  <button className="add-btn-cart btn btn-block text-center p-2"><FaPlus className='ml-2'/> افزودن سبد خرید</button>
                                </div>
                                
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item'>
                                <div className="card rounded-3 border-0">
                                  <div className="card-img-top">
                                      <img src={Img3} style={{height:'100px'}} alt="product img /54ase" />
                                  </div>
                                  <div className="card-body d-flex">
                                    <h6 className="card-title mb-2">کیف چرم</h6>
                                    <p className="card-text mt-1" style={{fontSize:'12px',marginRight:'auto'}}>
                                       2,000 تومان
                                    </p>
                                  </div>
                                  <button className="add-btn-cart btn btn-block text-center p-2"><FaPlus className='ml-2'/> افزودن سبد خرید</button>
                                </div>
                                
                            </SwiperSlide>
                        
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductCarouselSwiper
