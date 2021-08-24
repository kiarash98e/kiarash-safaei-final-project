import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import {FaMale,FaFemale} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function Category() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="row">
                            <div className="text-center d-flex justify-content-center flex-row p-3 ">
                                <div className=" mb-4 ms-3 ms-lg-5" style={{
                                    width:'7rem',
                                    border:'.1rem solid #6d6875',
                                    padding:'1rem',
                                    borderRadius:'.6rem'
                                    }}>
                                    <Link to={'/Men'} style={{
                                        color:'#6d6875',
                                        textDecoration:"none"
                                    }}>
                                        <div>
                                            <div><FaMale/></div>
                                            <div>
                                                <h4>مردانه</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className=" mb-4 ms-3 ms-lg-5" style={{
                                    width:'7rem',
                                    border:'.1rem solid #6d6875',
                                    padding:'1rem',
                                    borderRadius:'.6rem'
                                    }}>
                                    <Link to={'/Women'} style={{
                                        color:'#6d6875',
                                        textDecoration:"none"
                                    }}>
                                        <div>
                                            <div><FaFemale/></div>
                                            <div>
                                                <h4>زنانه</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Category
