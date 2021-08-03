import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import {ImgOption1,ImgOption2,ImgOption3,ImgOption4} from './ImgOption'
import './ShowOption.style.css'


const ShowStyle = {
    height:'auto',
}

const ShowOption = () => {
    return (
        <Container>
            <Row className='pr-3 mt-3 py-5' style={ShowStyle}>
               
                <Col xs={6} md={3} className='pt-3 d-flex justify-content-between'>
                    <img src={ImgOption1} alt="" />
                    <p className="mr-auto d-flex align-items-center">ضمانت اصل بودن کالا</p>
                </Col>
                <Col xs={6} md={3} className='pt-3 d-flex justify-content-between'>
                    <img src={ImgOption2} alt="" />
                    <p className="mr-auto d-flex align-items-center">7 روز ضمانت کالا</p>
                </Col>
                <Col xs={6} md={3} className='pt-3 d-flex justify-content-between'>
                    <img src={ImgOption3} alt="" />
                    <p className="mr-auto d-flex align-items-center">پرداخت درب محل</p>
                </Col>
                <Col xs={6} md={3} className='pt-3 d-flex justify-content-between'>
                    <img src={ImgOption4} alt="" />
                    <p className="mr-auto d-flex align-items-center">پشتیبانی 24 ساعته</p>
                </Col>

            </Row>
        </Container>
    )
}

export default ShowOption;
