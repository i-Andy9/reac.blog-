import bici from '../../Assests/img/smoke.png'
import {Parallax} from 'react-parallax'



const ParallaxImg1 =()=>{
    return(
        <Parallax style={{}}bgImage={bici} bgImageAlt="Bici" strength={-650}>
        <div style={{height:480}}></div>
    </Parallax>
    )
}

export default ParallaxImg1