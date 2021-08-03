import React from 'react'
import {Banner,Header,Footer,ShowOption,ProductCarouselSwiper,TitleHomeSection,CatlogAds} from '../../components/HomeComponent'
const homeStyle = {
    height:'100%',
    width:'100%'
}

const Home = () => {
    return (
        <div style={homeStyle}>
            <Header/>
            <Banner/>
            <TitleHomeSection title={'جدیدترین ها'}/>
            <ProductCarouselSwiper/>
            <CatlogAds/>
            <TitleHomeSection title={'پرفروش ترین ها'}/>
            <ProductCarouselSwiper/>
            <TitleHomeSection title={'محبوب ترین ها'}/>
            <ProductCarouselSwiper/>
            <ShowOption/>
            <Footer/>
        </div>
    )
}

export default Home
