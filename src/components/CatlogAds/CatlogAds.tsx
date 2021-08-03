/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Col,Container,Row} from 'react-bootstrap'
import {Ads1,Ads2,Ads3,Ads4} from './ImgAds'
const styleHeight = {
    height: 'auto'
}
const CatlogAds = () => {
    return (
        <div>
            <Container>
                <Row className='p-2' style={styleHeight}>
                    <Col xs={6} md={3} className='pt-3'>
                        <img src={Ads1} className='img-fluid w-100 h-100 d-block' alt="ads image" />
                    </Col>
                    <Col xs={6} md={3} className='pt-3'>
                        <img src={Ads2} className='img-fluid w-100 h-100 d-block' alt="ads image" />
                    </Col>
                    <Col xs={6} md={3} className='pt-3'>
                        <img src={Ads3} className='img-fluid w-100 h-100 d-block' alt="ads image" />
                    </Col>
                    <Col xs={6} md={3} className='pt-3'>
                        <img src={Ads4} className='img-fluid w-100 h-100 d-block' alt="ads image" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CatlogAds;
