/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import SwiperCore,{Navigation,Pagination,Autoplay,} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/swiper-bundle.min.css'
import'./Banner.style.css'
SwiperCore.use([Navigation,Pagination,Autoplay])

// eslint-disable-next-line import/first
import {Img1,Img2,Img3} from './Images'

const style_swiper = {
    marginTop:'3rem',
    height:'25rem'
}


const Banner = () => {
    return (
        <div>
            <Swiper    
                speed={2000}
                allowTouchMove={true}
                slidesPerView={1}
                autoplay={{delay:2000,disableOnInteraction: false,
                    pauseOnMouseEnter: true}}
                loop
                navigation
                pagination={{clickable:true}}
                scrollbar={{draggable:true}}
                effect={'fade'}
                style={style_swiper}
            >
                {/* {
                    // images && images.map((src,i) => (
                        
                    // ))
                    
                } */}
                <SwiperSlide className='slider-item'>
                        <img src={Img1} alt='item slider' />
                </SwiperSlide>
                <SwiperSlide className='slider-item'>
                        <img src={Img2} alt='item slider' />
                </SwiperSlide>
                <SwiperSlide className='slider-item'>
                        <img src={Img3} alt='item slider' />
                </SwiperSlide>
            </Swiper>
    

        </div>
    );
}

export default Banner;
