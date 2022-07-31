import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { GiWolfHowl } from "react-icons/gi";

import { IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import * as ImageIcons from './ImageIcons';

function Footer() {

	return(
		<div className='footer-container'>
			<div className="social-border" />


			<section className="social-media">
				<div className="social-media-wrap">
					<div className="footer-logo">
						<Link to="/" className='social-logo'>
							<i><GiWolfHowl /></i> 
             				<h1>CEU</h1> 
						</Link>
						<small className='website-rights'>CEU &copy; 2022 Created by: Rodrigo Cuello</small>
					</div>
					
					<div className='social-icons'>
						<a className='social-icon-link facebook'
									 href='https://www.facebook.com/jane.came'
									 target='Facebook'
									 arial-label='Facebook'
									 >
							<IoLogoFacebook />
						</a>
				
						<a className='social-icon-link instagram'
									 href='https://www.instagram.com/rodrigo_cuello_03/?hl=en'
									 target='instagram'
									 arial-label='Instagram'
									 >
							<IoLogoInstagram />
						</a>
				
						<a className='social-icon-link twitter'
									 href='https://twitter.com/RodrigoRiane?t=Tt_hEa0VIAFD-RoUBAJxkg&s=092'
									 target='Twitter'
									 arial-label='Twitter'
									 >
							<IoLogoTwitter />
						</a>
				
						<a className='social-icon-link linkedin'
									 href='http://www.linkedin.com/in/rodrigo-cuello-cue03'
									 target='LinkedIn'
									 arial-label='LinkedIn'
									 >
							<IoLogoLinkedin />
						</a>
					</div>
				</div>
			</section>
			<p>Powered by: </p>
			<section className="wrap-powered">

				<div className="wrap-powered">
					<div className="powered"><img src={ ImageIcons.htmlOrg } alt="html"/></div>
					<div className="powered"><img src={ ImageIcons.cssOrg } alt="css"/></div>
					<div className="powered"><img src={ ImageIcons.jsOrg } alt="js"/></div>
					<div className="powered"><img src={ ImageIcons.reactOrg } alt="react"/></div>
					<div className="powered"><img src={ ImageIcons.nodejsOrg } alt="nodejs"/></div>
					<div className="powered"><img src={ ImageIcons.firebaseOrg } alt="firebaseOrg"/></div>
					
				</div>

			</section>

		</div>
	);
}
export default Footer;