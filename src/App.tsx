import React from 'react'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import ProductCarouselSwiper from './components/ProductCarouserlSwiper/ProductCarouselSwiper'
import TitleHomeSection from './components/TitleHomeSection/TitleHomeSection'

function App() {
  return (
    <div style={{
      height:'100%',
      width:'100%'
    }}>
      <Header/>   
      <Banner/>  
      <TitleHomeSection title={'جدیدترین ها'}/> 
      <ProductCarouselSwiper/>
    </div>
  )
}

export default App
