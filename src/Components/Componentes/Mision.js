import React from 'react'
import { Col,  Row } from 'reactstrap'
import MarcoFoto2 from '../Views/MarcaoFoto2'

const margen={
    marginBottom: '80px',
    marginTop:'80px'
}

 const Mision = () => {
    return (
        
            <Row style={{background:'#f3c5ff'}}>        
                
                <Col   sm={{size:'4', offset:2}} style={{margen}}>
                    <Row>
                        <Col className='mt-5' >
                            <h2 className='text-center' style={{letterSpacing:'0.5px',color:'#1e1e1e', marginTop:'30px', fontWeight:'900'}}> Mision </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className=' text center'  >
                            <h5 className=' text center'style={margen}> Como emprese buscamos la sustentabilididad de nuestros productos por medio de hibernaderos, 
                            mostrando que la jardineria es una disciplina que posee mucha pasion, mostrando el trabajo dedicado en la plantas como tambien en los polerones
                            estampado y con multiples diseños creado por nostros y pedidos por nuestros Clientes.
                            a
                            Como persona es no caer en prejuicios, dejar de lado las criticas negativas, no caer en la depresion y ver al mundo sin un fin con pensamientos nihilistas 
                                y tenener pensamientos suicidas, NDEAAAAAAAAH, no fumer una cajetilla diaria, y no pensar que el mundo es una mierda sin una sentido y que las personas que nos cuesta
                                ver el lado positivo o el lado bueno de la vida puedan tener un real apoyo y no solo palabras vacias de consuelo momentaneo que supuestamente 
                            </h5><br/>
                            <p> 
                            </p>

                        </Col>
                    </Row>
                </Col>
                <Col  xs='12'  sm={{  size: '4', offset: 1 }} >
                    <MarcoFoto2 />
                </Col>
            </Row>
                
    )
}
export default Mision