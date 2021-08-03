import React from 'react';
import {Container,Col,Row,InputGroup,FormControl} from 'react-bootstrap'
import { FaClock,  FaEnvelope,  FaInstagram, FaLinkedin, FaMapMarker, FaPaperPlane, FaPhone, FaPinterest, FaTelegram } from 'react-icons/fa';

const bgFooter = {
    background: '#43691D',
    color:'#fff',
    marginTop:'3rem'
}

let dateYear:any = new Date().getFullYear()

const Footer = () => {
    return (
        <>
            <footer className='py-5' style={bgFooter}>
                <Container>
                    <Row >
                        <Col xs={12} md={4} className='pt-md-0 pt-4'>
                            <h5>اطلاعات تماس</h5>
                            <div className="d-flex flex-column pt-5">
                                <div style={{paddingTop:'1.5rem'}}>
                                    <span><FaMapMarker/></span>
                                    <span style={{marginRight:'1.5rem'}}> آمل - خیابان هراز</span>
                                </div>
                                <div style={{paddingTop:'1.5rem'}}>
                                    <span><FaPhone/></span>
                                    <span style={{marginRight:'1.5rem'}}>09114141381</span>
                                </div>
                                <div style={{paddingTop:'1.5rem'}}>
                                    <span><FaClock/></span>
                                    <span style={{marginRight:'1.5rem'}}> ساعت کاری شنبه تا چهارشنبه</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className='pt-md-0 pt-4'>
                            <h5>اطلاع از آخرین محصولات و رویداد ها</h5>
                            <div className="d-flex flex-column pt-5">
                                <div style={{paddingTop:'1.5rem'}}>
                                    <p>با عضویت در خبر نامه ما از آخرین آفر های فصلی زود تر از بقیه با خبر شوید</p>
                                    <InputGroup>
                                        <FormControl
                                        className="Khabrname"
                                        placeholder="عضویت در خبرنامه"
                                        aria-describedby="basic-khabrname"
                                        />
                                        <InputGroup.Text style={{cursor: 'pointer',
                                        backgroundColor:'#fff'}} id="basic-khabrname"><FaPaperPlane/></InputGroup.Text>
                                    </InputGroup>
                                </div>
                                <div>
                                    <Row>
                                        <Col xs={3} style={{paddingTop:"1rem"}}>
                                            <FaInstagram style={{cursor: 'pointer',
                                            }}/>
                                        </Col>
                                        <Col xs={3} style={{paddingTop:"1rem"}}>
                                            <FaLinkedin style={{cursor: 'pointer',
                                            }}/>
                                        </Col>
                                        <Col xs={3} style={{paddingTop:"1rem"}}>
                                            <FaTelegram style={{cursor: 'pointer',
                                            }}/>
                                        </Col>
                                        <Col xs={3} style={{paddingTop:"1rem"}}>
                                            <FaPinterest style={{cursor: 'pointer',
                                            }}/>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='d-flex justify-content-center pt-5'>
                                    <p style={{marginLeft:'.75rem'}}>kiarashsafaei0@gmail.com</p>
                                    <FaEnvelope/>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className='pt-md-0 pt-4 pr-4'>
                            <h5>دسترسی سریع</h5>
                            <div className="d-flex flex-column pt-5">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a href="/#" className="nav-link text-white">خانه</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/#" className="nav-link text-white">فروشگاه</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/#" className="nav-link text-white">سفارشات</a>
                                    </li>
                                </ul>
                        
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <p className='text-center ' style={{paddingTop:'3rem'}}>&copy; تمامی حقوق سایت متعلق به کیارش صفایی است - {
                            dateYear   
                        }</p>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
