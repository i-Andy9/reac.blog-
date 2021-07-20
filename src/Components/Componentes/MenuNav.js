import React from 'react'
import {Col,Row,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
/* import ParallaxImg1 from '../Views/ParallaxImg1';
import ParallaxImg2 from '../Views/ParallaxImg2'; */
const navccs={
    color:'white'
}



   const MenuNav = () => {
    return (
        <Row>
            <Col>
                <Navbar className=" navbar navbar-expand" style={{backgroundColor: '#680065'}}light expand="md">
                <NavbarBrand style={{marginLeft:'10xp'}} href="/" style={navccs}>. .ShibuyaStore</NavbarBrand>
                <NavbarToggler />
                <Collapse  navbar>
                <Nav className="mr-auto"navbar>
                    <NavItem>
                    <NavLink style={navccs} href="/Vision">Vision</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink style={navccs} href="/Mision">Mision</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret style={navccs}>
                        Productos
                    </DropdownToggle>
                    <DropdownMenu right >
                        <DropdownItem >
                        Cactus
                        </DropdownItem>
                        <DropdownItem>
                        Polerones
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Reset
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                </Collapse>
                </Navbar>
                {/* <Row fluid>
                    <Col fluid>
                        <ParallaxImg1/>
                        <div style={{height:'30vh'}}></div>
                    </Col>
                </Row>
                <Row fluid>
                    <Col fluid>
                        <ParallaxImg2/>
                        <div style={{height:'10vh'}}></div>
                    </Col>
                </Row> */}
            </Col>
        </Row>
    )
}
export default MenuNav