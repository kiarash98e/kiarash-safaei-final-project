import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import {Banner,TitleHomeSection,ProductCarouselSwiper,ProductLikeSwiper,ProductNewSwiper,CatlogAds,ShowOption} from '../HomeComponent'
const Main = () => {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <Banner/>
                    <TitleHomeSection title={'جدیدترین ها'}/>
                    <ProductCarouselSwiper/>
                    <CatlogAds/>
                    <TitleHomeSection title={'پرفروش ترین ها'}/>
                    <ProductNewSwiper/>
                    <TitleHomeSection title={'محبوب ترین ها'}/>
                    <ProductLikeSwiper/>
                    <ShowOption/>
                </Col>
            </Row>
        </Container>
    );
}

export default Main;
