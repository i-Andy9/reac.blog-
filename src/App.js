import {BrowserRouter as Router, } from 'react-router-dom';

import MenuNav from './Components/Componentes/MenuNav'
import Vision from './Components/Componentes/VIsion'
import './App.css';
import {Col,Row,} from 'reactstrap';
import ParallaxImg1 from './Components/Views/ParallaxImg1';
import ParallaxImg2 from './Components/Views/ParallaxImg2';
import Mision from './Components/Componentes/Mision';
import { Footer } from './Components/Componentes/Footer';

function App() {
  return (
    <Router>
      <MenuNav/>
      <Row >
                    <Col >
                        <ParallaxImg1/>
                        
                    </Col>
                </Row>
      <Vision/>
                <Row fluid>
                    <Col fluid>
                        <ParallaxImg2/>                        
                    </Col>
                </Row>
      <Mision/>
      
     {/* // <div style={{height:'20vh'}}></div> */}
     <Footer/>
      </Router>
      
  );
}

export default App;
