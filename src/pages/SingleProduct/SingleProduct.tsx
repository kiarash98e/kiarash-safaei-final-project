/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {addItemToCart} from '../../Action/ItemAction'
import {Button, Col,Container,Row,Tabs,Tab, ProgressBar} from 'react-bootstrap'
import { FaCheckSquare, FaPlus , FaSellcast, FaStar } from 'react-icons/fa'
import './SingleProduct.css'
import { Footer, Header, ProductCarouselSwiper, ShowOption } from '../../components/HomeComponent'

function SingleProduct() {
    const singleproduct = useSelector((state:any) => state.products.Data)
    const id:any = useParams()
    const dispatch = useDispatch()
    const item = singleproduct.filter((item:any) => item._id === +id.id)
    console.log(id)
    // React.useEffect(() => {
    //     console.log(setId(id))
    //     console.log(singleproduct._id === Id)
    // }, [])
    const [Key,setKey] = React.useState('dateil')
    return(
        <>
            <Header/>
            <Container className='pt-5'>
                <Row className='pt-4'>
                    <Col xs={12}>
                        {
                            item && item.map((item:any) => (
                              <Row className='p-3 shadow' key={item._id}>
                                  <Col xs={12} xl={4}>
                                    <img src={item.image} alt={item.name} className='rounded-2' style={{width:'100%',height:'22rem'}} />
                                  </Col>
                                  <Col xs={12} xl={8} className='p-3'>
                                      <Row className='w-100'>
                                          <Col xs={12} xl={8} className='px-3 py-3'>
                                              <Row>
                                                  <h4 className='text-dark pe-5'>{item.name}</h4>
                                              </Row>
                                              <Row className='pe-5 mt-4'>
                                                <Col xs={12} xl={6} className='my-3 my-lg-0'>
                                                    <Row>
                                                        <Col xs={6}>
                                                            دسته بندی :
                                                        </Col>
                                                        <Col xs={6}>{item.subCategory}</Col>
                                                    </Row>
                                                </Col>
                                                <Col xs={12} xl={6} className='my-lg-0 my-3'>
                                                    <Row>
                                                        <Col xs={6}>
                                                            امتیاز :
                                                        </Col>
                                                        <Col xs={6}>{item.rating}</Col>
                                                    </Row>
                                                </Col>
                                              </Row>
                                              <Row className='pe-5 mt-3'>
                                                  <Col xs={12} xl={6}>
                                                    <Row>
                                                        <Col xs={6} xl={4}>
                                                            برند :
                                                        </Col>
                                                        <Col xs={6} xl={6}>
                                                            {item.brand}
                                                        </Col>
                                                    </Row>
                                                  </Col>
                                                  <Col xs={12} xl={12}>
                                                    <Row className='mt-3'>
                                                        <Col xs={12} xl={3} className='my-3 my-lg-0'>
                                                            توضیحات :
                                                        </Col>
                                                        <Col xs={12} xl={9}>
                                                            <p>این محصول دارای {item.describtion[1]} و دارای {item.describtion[0]} است</p>
                                                        </Col>
                                                    </Row>
                                                  </Col>
                                                  <Col xs={12}>
                                                      <Row className="mt-3">
                                                          <Col xs={12} xl={6}>
                                                              <Row>
                                                                    <Col xs={12} className='my-2 mt-4'>انتخاب رنگ</Col>
                                                                    <Col xs={12} className='my-2'>
                                                                        <select name={item.name} className='form-select form-control w-50 mt-3' id={`${item._id}`}>
                                                                                <option value=""></option>
                                                                                {
                                                                                    item.color.map((color:any) => 
                                                                                        <option value={color}>{color}</option>
                                                                                    )
                                                                                }
                                                                            </select>
                                                                    </Col>
                                                              </Row>
                                                          </Col>
                                                          <Col xs={12} xl={6} className='pt-3'>
                                                              <Row>
                                                                    <Col xs={12} className='my-2'>انتخاب سایز</Col>
                                                                    <Col xs={12} className='my-2'>
                                                                        <select name={item.name} className='form-control w-50 mt-3 form-select' id={`${item._id}`}>
                                                                            <option value=""></option>
                                                                            {
                                                                                item.size.map((item:any) => 
                                                                                    <option value={item}>{item}</option>
                                                                                )
                                                                            }
                                                                        </select>
                                                                    </Col>                
                                                              </Row>
                                                          </Col>
                                                      </Row>
                                                  </Col>
                                              </Row>
                                          </Col>
                                          <Col xs={12} xl={4} className='px-3 py-3'>
                                              <Row className='pt-3' style={{height:'20rem'}}>
                                                 <Col xs={12}>
                                                     <Row className='d-flex py-3'>
                                                         <Col xs={2}><FaSellcast/></Col>
                                                         <Col xs={10}>
                                                             فروشنده چرم مشهد
                                                         </Col>
                                                     </Row>
                                                     <Row className="d-flex py-3">
                                                         <Col xs={2}><FaCheckSquare/></Col>
                                                         <Col xs={10}>ضمانت اصل بودن کالا</Col>
                                                     </Row>
                                                 </Col>
                                                 <footer>
                                                    <Row>
                                                        <div className="d-flex flex-column py-2 w-100">
                                                            <p>قیمت</p>
                                                            <h5 className='me-auto'>{item.price} تومان</h5>
                                                        </div>
                                                    </Row>
                                                    <Row className='mt-4'>
                                                        <Button 
                                                            size='lg' 
                                                            className='btn-add'
                                                            onClick={() => dispatch(addItemToCart(item._id))}                           
                                                        >
                                                            <FaPlus className='ms-2'/>
                                                            افزودن به سبد خرید    
                                                        </Button>
                                                    </Row>
                                                 </footer>
                                              </Row>
                                          </Col>
                                      </Row>
                                  </Col>
                              </Row>
                            ))
                        }
                    </Col>
                </Row>
                <Row className="mt-5 py-2">
                    <Col xs={12} className=''>
                        <Row>محصولات مشابه</Row>
                        <Row>
                            <ProductCarouselSwiper/>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-5 py-2">
                    <div className="row ">
                        <Tabs
                        id="controlled-tab-example"
                        activeKey={Key}
                        onSelect={(k:any) => setKey(k)}
                        className="mb-3 d-flex justify-content-start text-dark position-relative"
                        >
                        <Tab eventKey="dateil" title="مشخصات">
                            <Container className='pe-xl-5'>
                                <Row className='pe-xl-5'>
                                    <Col xs={12} xl={8} className='pe-4 pt-3'>
                                        <Row className='my-3'>مشخصات کالا</Row>
                                        <div className="d-flex">
                                        {
                                            item && item.map((item:any) => (
                                                <Row key={item._id}>
                                                    <Col xs={12} className='my-2'>
                                                        <Row>
                                                            <Col xs={6}>نام</Col>
                                                            <Col xs={6}>{item.name}</Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={12} className='my-2'>
                                                        <Row>
                                                            <Col xs={6}>برند</Col>
                                                            <Col xs={6}>{item.brand}</Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={12} className='my-2'>
                                                        <Row>
                                                            <Col xs={6}>رنگ</Col>
                                                            <Col xs={6}>
                                                                {
                                                                item.color.length > 1 && item.color.map((color:any) => (
                                                                        <span className="mx-2">{color}</span>
                                                                    ))
                                                                }
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={12} className='my-2'>
                                                        <Row>
                                                            <Col xs={6}>سایز</Col>
                                                            <Col xs={6}>
                                                                {
                                                                    item.size.map((size:any) => (
                                                                        <span className="mx-2">{size}</span>
                                                                    ) )
                                                                }
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={12} className='my-2'>
                                                        <Row>
                                                            <Col xs={6}>نوع چرم</Col>
                                                            <Col xs={6}>
                                                                {item.describtion[0]}
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            
                                            ))
                                        }
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="profile" title="دیدگاه مشتریان" >
                            <Container className='pe-xl-5'>
                                <Row className='pe-xl-5'>
                                    <Col xs={12} xl={8} className='pe-4 pt-3'>
                                        <Row className='my-3'>امتیاز و دیدگاه کاربران</Row>
                                        <Row className='my-3'>
                                            <div className="d-flex">
                                                <Row>
                                                    <Col xs={12} className='my-2'>
                                                        <Row>
                                                            <Col xs={12} className='d-flex px-2'>
                                                                <span className='px-1 fw-bolder' style={{
                                                                    fontSize:"25px"
                                                                }}>4</span>
                                                                <span className='px-1 mt-2'>از</span>
                                                                <span className='px-1 mt-2 fw-light'>5</span>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <Row>
                                                            <Col xs={12} className='d-flex px-2'>
                                                                <div className="">
                                                                    <FaStar/>
                                                                    <FaStar/>
                                                                    <FaStar/>
                                                                    <FaStar/>
                                                                    <FaStar style={{
                                                                        color:"transparent"
                                                                    }}/>
                                                                </div>
                                                                <div className='fw-light'>از مجموع ۱۸ امتیاز</div>
                                                            </Col>
                                                        </Row>                                    
                                                    </Col>
                                                    <Col xs={12}>
                                                        <Row>
                                                            <Col xs={12} className='my-2'>راحتی</Col>
                                                            <Col xs={12}>
                                                                <Row>
                                                                    <Col xs={9}>
                                                                        <ProgressBar now={70}/>
                                                                    </Col>
                                                                    <Col xs={3}>4.3</Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <Row>
                                                            <Col xs={12} className='my-2'>کیفیت دوخت و طراحی</Col>
                                                            <Col xs={12}>
                                                                <Row>
                                                                    <Col xs={9}>
                                                                        <ProgressBar now={70}/>
                                                                    </Col>
                                                                    <Col xs={3}>4.5</Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <Row>
                                                            <Col xs={12} className='my-2'>ارزش خرید نسبت به قیمت</Col>
                                                            <Col xs={12}>
                                                                <Row>
                                                                    <Col xs={9}>
                                                                        <ProgressBar now={70}/>
                                                                    </Col>
                                                                    <Col xs={3}>4.1</Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <Row>
                                                            <Col xs={12} className='my-2'>کیفیت مواد به کار رفته</Col>
                                                            <Col xs={12}>
                                                                <Row>
                                                                    <Col xs={9}>
                                                                        <ProgressBar now={70}/>
                                                                    </Col>
                                                                    <Col xs={3}>3.9</Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Row>    
                                    </Col>
                                </Row>
                            </Container>
                       
                        </Tab>
                        
                    </Tabs>
                    </div>
                </Row>      
            </Container>
            <ShowOption/>
            <Footer/>
        </>
    )
}

export default SingleProduct
