import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import Alert from './Alert';
import PropTypes from 'prop-types';
import Logo9 from '../assets/images/logo9.png';
import {Dropdown,Row, Container, Button, ButtonGroup} from 'react-bootstrap'
import { MDBBtn } from "mdbreact";
import MediaQuery from 'react-responsive'


const navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        
        <div className='navbar_top'>
                      
                   
                        <NavLink className='navbar__top__item__link' exact to='/'>HOME</NavLink>
                   
                   
                        <NavLink className='navbar__top__item__link' exact to='/listings'>LISTINGS</NavLink>
                   
                    
                        <NavLink className='navbar__top__item__link' exact to='/about'>ABOUT US</NavLink>
                       
                   
                        <NavLink className='navbar__top__item__link' exact to='/contact'>CONTACT</NavLink>
                    
                        <Dropdown as={ButtonGroup}>
                    <Button variant="success">WELCOME</Button>
       
      
                  <Dropdown.Toggle split variant="success" id="dropdown-menu-align-right" />

                   <Dropdown.Menu >
                 
                           <Dropdown.Item style={{padding:0}}   className='register-btn' onClick={logout}   href="#!">LOG OUT</Dropdown.Item>
                           
                   </Dropdown.Menu>
                      </Dropdown>
                        {/* <a className='register-btn' onClick={logout} href='#!'>LOG OUT</a> */}
                       
                   
                   
                   
        </div>
        
    );


    

    const guestLinks = (




        <Fragment>
          
        
             <div className='navbar__top'>
                    <a href="/">HOME</a>

					<a href="/listings">LISTINGS</a>
					<a href="/about">ABOUT US</a>
					<a href="/contact">CONTACT</a>
                   
					<a href="/login" className="register-btn">
						LOGIN
					</a>
                    <a href="/signup" className="register-btn">
						SIGNUP
					</a>
                    
                  
           
            {/* <Link className='navbar__top__auth__link' to='/login'>LOGIN</Link>
            <Link className='navbar__top__auth__link' to='/signup'>SIGN UP</Link> */}
            </div>
         
        </Fragment>
        
        
    );

    return (
        <Fragment>
            <nav className='navbar_top'>
       



                <div className='navbar__top'>
                    <div className='navbar__top__logo'>
                    <a href="/">
                    <img className='navbar__top__logo'  src={Logo9} alt='' />
                    </a>
                    </div>
                    <div className='navbar__top__auth'>
                        { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
                    </div>
                </div>
                
                   
               
                {/* <div className='navbar__bottom'>
                    
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/'>HOME</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/listings'>LISTINGS</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/about'>ABOUT</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/contact'>CONTACT</NavLink>
                    </li>
            

                </div>  */}
                    {/* <div className='navbar__top'>
                    <a href="/">HOME</a>
                  
					<a href="/listings">LISTINGS</a>
					<a href="/about">ABOUT</a>
					<a href="/contact">CONTACT US</a>
					<a href="/login" className="register-btn">
						LOGIN
					</a>
                    <a href="/signup" className="register-btn">
						SIGNUP
					</a>
                  
           
            
            </div> */}
             </nav>
            <Alert />
        </Fragment>
    );
};

navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(navbar);
