import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown } from "react-bootstrap";
class NavBar extends Component {
  render() {
    return (
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="#home">Xuân vinh</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#features">Trang chủ</Nav.Link>
					<Nav.Link href="#pricing">Liên hệ</Nav.Link>
					{/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown> */}
				</Nav>
				<Nav>
					<Nav.Link href="#deets">
					Total: {this.props.total}
					<i className="fas fa-shopping-cart"></i> 
					
					</Nav.Link>
					<Nav.Link eventKey={2} href="#memes">
						Đăng nhập
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
    );
  }
}

export default NavBar;