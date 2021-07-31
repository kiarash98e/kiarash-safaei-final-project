import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import Logo from '../Logo/Logo';
import './Navbar.style.css'
const NavbarH = () => {
    const [expended, setExpended] = React.useState(false)
    const handleToggle = () =>{
        setExpended(expend => !expend)
    }
    return (
        <>
            <Navbar bg='dark' variant='dark' expanded={expended} onToggle={handleToggle} collapseOnSelect expand='md' className='navbar-container'>
               
                    <Navbar.Brand href="#" className='navbar-item'>
                        <Logo/>
                    </Navbar.Brand>
                    <Navbar.Toggle className='toggle-btn'  aria-controls="responsiv-nav"/>
                    <Navbar.Collapse id="responsiv-nav" >
                        <Nav className='nav'>
                            <Nav.Link className="nav-link" href="#">خانه</Nav.Link>
                            <Nav.Link className="nav-link" href="#">فروشگاه</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                
                  
            </Navbar>
        </>
    );
}

export default NavbarH;
