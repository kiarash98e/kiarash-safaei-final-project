import { Container,Row,Col } from 'react-bootstrap'
import { FaCube } from 'react-icons/fa'
import SplitText from 'react-pose-text'
import Aos from 'aos'
import 'aos/dist/aos.css'

interface ITitle {
    title:string
}
interface WordAnim {
    exit:{
        opacity:number,
        x:number | string
    },
    enter:{
        opacity:number,
        x:number | string
        delay:(key:number) => void
    }
}

const wordPoses:WordAnim = {
    exit: { opacity: 0, x: 20 },
    enter: {
      opacity: 1,
      x: 0,
      delay: (wordIndex:number) => wordIndex * 100
    }
  }

const cubeStyle = {
    fontSize:'1rem',
    color:'#E59C2C',
    marginTop:'1rem',
    marginBottom:'3rem'
}

const TitleHomeSection: React.FC<ITitle> = ({title=""}) => {
    Aos.init()
    return (
        <Container>
            <Row>
                <Col>
                    <div className="text-center">
                        <div className="row">
                            <div className="col-12 pt-5">
                               <h2 className="title-home" data-aos='fade-left'>
                                    <SplitText initialPose="exit" pose="enter" wordPoses={wordPoses}>
                                        {title}
                                    </SplitText>
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
