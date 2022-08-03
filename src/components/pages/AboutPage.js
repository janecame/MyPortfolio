import '../../App.css';
import React from 'react';
import '../about.css';
import { rodrigo, profile } from '../ImageIcons';

import { 	IoLogoInstagram, 
			IoLogoFacebook, 
			IoLogoGithub, 
			IoLogoTwitter, 
			IoSchool, 
			IoHome,
			IoLogoStackoverflow,
			IoLogoLinkedin,
			IoCall,
			IoMail,
			IoCalendar,
			IoCheckmarkCircle,
			IoPerson
		} from 'react-icons/io5';

const AboutPage = () => {


	return (
		<>

		<div className="about">
			{/*<video src="/videos/video-2.mp4" autoPlay loop muted />*/}
			{/*<img src="images/verified.png" alt="verified"/>*/}
			<div className="about-wrapper">
				
				<div className="about-box">
					<div className="about-profile about-border about-border-radius">
						<img src={profile} alt="profile"/>

					</div>

					<div className="about-details">
						<h1>Cuello, Rodirgo "Cue" </h1>
						<p className="bio">"I'm a lazy programmer 🥱🥱"</p>
						<p><IoSchool /> Study At <strong>STI West Negros University</strong></p>
						<p><IoHome /> Lives At <strong>Murcia, Negros Occidental, Philippines</strong></p>

						<p><strong>Basic Info</strong></p>
						<div className="about-border"></div>
						<p><IoCalendar /> Birthdate <strong>October 3, 2000</strong></p>
						<p><IoPerson /> Sex <strong>Male</strong></p>
						<p><IoCheckmarkCircle /> Status <strong>Single</strong></p>

						<p><strong>Contact Info</strong></p>
						<div className="about-border"></div>
						<p><IoCall />  <strong>09619055939</strong></p>
						<p><IoMail />  <strong>rianecuello@gmail.com</strong></p>
						
							
							
					</div>
					<div className="about-social">
					<div className="about-profile-2">
						<img src={profile} alt="profile"/>
					</div>
								
								<a className='social-icon-link' href='https://www.instagram.com/rodrigo_cuello_03/?hl=en'
									target='instagram'
									arial-label='instagram'
									 >
									<IoLogoInstagram />
								</a>
								<a className='social-icon-link' href='https://twitter.com/RodrigoRiane?t=Tt_hEa0VIAFD-RoUBAJxkg&s=092'
									target='twitter'
									arial-label='twitter'
								>
									<IoLogoTwitter />
								</a>
								<a className='social-icon-link' href='https://www.facebook.com/jane.came'
									target='facebook'
									arial-label='facebook'
								>
									<IoLogoFacebook />
								</a>
								<a className='social-icon-link' href='http://www.linkedin.com/in/rodrigo-cuello-cue03'
									target='Linkedin'
									arial-label='Linkedin'
									>
									<IoLogoLinkedin />
								</a>
								<a className='social-icon-link' href='https://stackoverflow.com/users/16163993/rodrigo-cuello'
									target='Stackoverflow'
									arial-label='Stackoverflow'
								>
									<IoLogoStackoverflow />
								</a>

								<a className='social-icon-link' href='https://github.com/janecame'
									target='Github'
									arial-label='Github'
								>
									<IoLogoGithub />
								</a>
								
							</div>

					{/*<div className="about-other">
						<p>Interested</p>
						<div className="about-likes">
							<div className="project-icon tooltip">
								<IoCodeSlash />
								
								<span className="tooltiptext">Programming</span>
						  	</div>
						  	<div className="project-icon tooltip">
								<IoColorPalette />
								
								<span className="tooltiptext">Portrating</span>
						  	</div>
						  	<div className="project-icon tooltip">
								<IoGameController />
								
								<span className="tooltiptext">Playing Games</span>
						  	</div>
							
							
						</div>
						
					</div>*/}
				</div>
				
			</div>
			
		</div>
		</>
	);
}
export default AboutPage;