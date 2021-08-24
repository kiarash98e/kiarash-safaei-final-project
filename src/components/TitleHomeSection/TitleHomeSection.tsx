import { Container,Row,Col } from 'react-bootstrap'
import { FaCube } from 'react-icons/fa'
import './TitleHomeSection.css'

interface ITitle {
    title:string
}




const cubeStyle = {
    fontSize:'1rem',
    marginTop:'1rem',
    marginBottom:'3rem'
}

const TitleHomeSection: React.FC<ITitle> = ({title=""}) => {
   
    return (
        <Container>
            <Row>
                <Col>
                    <div className="text-center">
                        <div className="row">
                            <div className="col-12 pt-3 text-dark">
                               <h2 style={{color:'#333'}} className="title-home">
                                    {title}
                               </h2>
                            </div>
                            <div className="col-12 cube-container">
                                <FaCube style={cubeStyle} />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default TitleHomeSection
