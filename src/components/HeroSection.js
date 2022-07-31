import React from 'react';
import { useNavigate } from 'react-router-dom';	
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { IoCall, IoLogoFacebook, IoLogoGithub, IoMail } from 'react-icons/io5';

import Circles from './BackgroundCircles';


function HeroSection({naviga}){

	const navigate = useNavigate();

	const onAboutPressed = () => {;
		navigate("/aboutme")
	}

	return(
		<div className='hero-container'>
			{/*<video src="/videos/lotr.mp4" autoPlay loop muted />*/}
			<div className="hero-wrapper">
						<Circles />
						<h2>Hello</h2>
						<h1>I'm Rodrigo Cuello</h1>
						<h3>MUR, Philippines</h3>
						<h2>Aspiring React JS Developer</h2>
						<p className="dash"></p>
						<p>
						I'm Rodrigo Cuello, a Bachelor of Science and Computer Science student from STI West Negros University. 
						I'm currently a third-year college student doing my 300 hours of on-the-job training, and we have the 
						task of continuing the system's deployment of the thesis project of entitled eDocPortal: 
						An Electronic Portal With Quick Response Technology For Bacolod City in Barangay 38., Bacolod City.	

						</p>
						
						<div className="hero-btn">
							<Button className='btns' 
							buttonStyle='btn--primary'
							buttonSize='btn--large'
							buttonType='btn--secondary'
							onClick={onAboutPressed}
							>
								About me
							</Button>

							
						</div>			
			
			</div>


			<div className="hero-btns">
							
							<Button className='btns' 
							buttonStyle='btn--primary'
							buttonSize='btn--large'
							buttonType='btn--rounded'
							onClick={onAboutPressed}
							>
							<IoCall />

							</Button>

							<Button className='btns' 
							buttonStyle='btn--primary'
							buttonSize='btn--large'
							buttonType='btn--rounded'
							onClick={onAboutPressed}
							>
							<IoMail />
							</Button>

							<Button className='btns' 
							buttonStyle='btn--primary'
							buttonSize='btn--large'
							buttonType='btn--rounded'
							onClick={onAboutPressed}
							>
							<IoLogoFacebook />
							</Button>
							
							<Button className='btns' 
							buttonStyle='btn--primary'
							buttonSize='btn--large'
							buttonType='btn--rounded'
							onClick={onAboutPressed}
							>
							<IoLogoGithub />
							</Button>

			</div>	
		</div>
	)
}

export default HeroSection;
