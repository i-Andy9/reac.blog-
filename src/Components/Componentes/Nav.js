import React from 'react'
import {Fragment,Col,Row,
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
    Button,
    ButtonGroup,
    NavbarText
  } from 'reactstrap';

export const Nav = () => {
    return (
        <Row>
            <Col>
                <Navbar className=" navbar navbar-expand navbar-dark bg-dark" light expand="md">
                <NavbarBrand href="/">. .ShibuyaStore</NavbarBrand>
                <NavbarToggler />
                <Collapse  navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink href="/Views/Articulos">Articulos</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="">Articulos 2</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Options
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Option 1
                        </DropdownItem>
                        <DropdownItem>
                        Option 2
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
            </Col>
        </Row>
    )
}
