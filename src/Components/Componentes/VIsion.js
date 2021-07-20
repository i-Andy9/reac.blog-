import React from 'react'
import { Col,  Row } from 'reactstrap'
import MarcoFoto from '../Views/MarcoFoto'

const margen={
    marginBottom: '180px',
    marginTop:'80px'
}

 const VIsion = () => {
    return (
        
            <Row style={{background:'#f3c5ff'}}>
                <Col  xs='12' md='4'  sm={{size: '4',offset:1}} >
                    <MarcoFoto />
                </Col>
                <Col   sm={{size:'4', offset:1}} style={{margen}}>
                    <Row>
                        <Col className='mt-5' >
                            <h2 className='text-center' style={{letterSpacing:'0.5px',color:'#1e1e1e', marginTop:'30px', fontWeight:'900'}}> Vision </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className=' text center'  >
                            <h4  className=' text center'style={margen}> En Shibuya optamos por pruductos sustentables que posean un bajo impacto 
                            medio ambiental, dando oprtunidad en nuestras areas de trabajo a profesionales motivados para nuestras metas y objetivos 
                            
                            </h4>
                        </Col>
                    </Row>
                </Col>
                
                
            </Row>
                
    )
}
export default VIsion