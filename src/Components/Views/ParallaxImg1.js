import City from '../../Assests/img/1368531.jpg'
import {Parallax} from 'react-parallax'
import { Row,Col } from 'reactstrap'
import '../../Utils/Fuente.css'
import ShibuyaFont from './ShibuyaFont'
 

const ParallaxImg1 =()=>{
    return(
        /* <Parallax bgImage={City} bgImageAlt="City" strength={200}>
        Content goes here. Parallax height grows with content height.
        <div style={{height:480}}></div>
    </Parallax> */

            <Parallax 
            bgImage={City}
            strength={500}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        width: percentage * 10,
                        height: percentage * 10,
                    }}
                />
            )}
            >
            <Row style={{height:700}}> 
                    <Col className='text-center' style={{ size:'6',offset:3, justifyContent: 'center',display: 'flex',
   alignItems: 'center'}}> <ShibuyaFont/>
                    </Col> 
            </Row>
            </Parallax>

    )
}

export default ParallaxImg1
