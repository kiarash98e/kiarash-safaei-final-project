import React from 'react';
import {Searchbar,Auth,ProductCart,NavbarH} from '../index'
import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div className="">
            <header className="text-white p-4" style={{
                position:'-webkit-sticky',
                top:'0',
                background:'#6b705c',
                color:'#ffe8d6'
            }}>
                <Container>
                    <Row>
                        <Col xs={4}><NavbarH/></Col>
                        <Col xs={4}><Searchbar/></Col>
                        <Col xs={4} className="pr-4 mr-auto">
                            <Row >
                                <div className="d-flex pr-5 mr-5">
                                    <div className="mt-2" style={{width:'3rem'}}>
                                        <Link to={'/cart'}>
                                            <ProductCart/>
                                        </Link>
                                    </div>
                                    <div style={{width:'3rem'}}>
                                        <Auth/>
                                    </div>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default Header;
