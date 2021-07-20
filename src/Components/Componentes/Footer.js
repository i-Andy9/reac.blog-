import React from 'react'
import {
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    Row
} from 'reactstrap'

const color =()=>{}

export const Footer = () => {
    return ( 
    
        <Row style={{background:'#680065', height:'400px'}}>
            
                
                {/* Informacion  */}
                <Col className='md-4 text-center'>
                    <h2 style={{color:'#fff',letterSpacing: '10px',  fontSize:'2.0em'}}className='mt-5'>Informacion</h2>
                    <h3 className='mt-4 ' style={{color:'#fff'}}>Mision</h3>
                    <h3 className='mt-4 ' style={{color:'#fff'}}>Vision</h3>
                </Col>
                 {/* Redes Sociales  */}
                 <Col className='md-4 text-center'>
                    <h2 style={{color:'#fff',letterSpacing: '10px', fontSize:'2.0em'}}className='mt-5'>Redes Sociales</h2>
                    <a  href='https://www.facebook.com/'> <h4 className='mt-4 ' style={{color:'#fff'}}>Facebook</h4></a>
                    <a  href='https://www.instagram.com/'><h4 className='mt-4 ' style={{color:'#fff'}}>Instagram</h4></a>   
                    <a  href='https://www.Linkedin.com/'><h4 className='mt-4 ' style={{color:'#fff'}}>Linkedin</h4></a> 
                    <a  href='https://www.Twitch.com/'><h4 className='mt-4 ' style={{color:'#fff'}}>Twitch</h4></a> 
                </Col>

                 {/* Informacion  */}
                 <Col className='md-4 text-center'>
                    <h2 style={{color:'#fff',letterSpacing: '10px', fontSize:'2.0em'}}className='mt-5'>Contacto</h2>
                    <h4 className='mt-4 ' style={{color:'#fff'}}> emailgenerico@contacto.rs </h4>
                    <h4 className='mt-4 ' style={{color:'#fff'}}> +56 9 696969696</h4>
                </Col>

                <h6 className='text-center ' style={{color:'#fff'}}> &copy;{new Date().getFullYear()} Todos los derechos de diseño e imagenes estan reservados </h6>
        </Row>

    
    )
}