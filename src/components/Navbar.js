import React, { useState } from 'react';
import { Link } from 'react-router-dom';	
import './Navbar.css';
import {  IoMenu, IoClose } from 'react-icons/io5';
import { GiWolfHowl } from "react-icons/gi";



function Navbar(){


	  const [click, setClick] = useState(false);
  	const [button, setButton] = useState(true);
    
    //const [navbar, setNavbar] = useState(false);
  	
    const handleClick = () => setClick(!click);
  	const closeMobileMenu = () => setClick(false);

  	const showButton = () => {
  		if(window.innerWidth <= 960){
  			setButton(false);
  		} else {
  			setButton(true);
  		}

  	};


   /* const changeBackground = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 66) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }

    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("navbar", changeBackground)
    })*/

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
      		<div className="navbar-container">
      			<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              {/*<img src={LOGO} alt="ceu"/>*/}
              <i><GiWolfHowl /></i> 
              <h1>CEU</h1> 
      			</Link>
      			<div className="menu-icon" onClick={handleClick}>
      				<i>
                 {click ? <IoClose /> : <IoMenu /> }

              </i>
      			</div>
      			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
      				<li className='nav-item'>
      					<Link to='/' className='nav-links' onClick={closeMobileMenu}>
      						Hi
      					</Link>
      				</li>
      				<li className='nav-item'>
      					<Link to='/journey' className='nav-links' onClick={closeMobileMenu}>
      						Journey
      					</Link>
      				</li>
      				<li className='nav-item'>
      					<Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
      						Projects
      					</Link>
      				</li>
              <li className='nav-item'>
                <Link to='/achievements' className='nav-links' onClick={closeMobileMenu}>
                  Achievements
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>
                  About Me
                </Link>
              </li>

      			</ul>
      		
      		</div>
      </nav>
    </>
  );
}

export default Navbar;
