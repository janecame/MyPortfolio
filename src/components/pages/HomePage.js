import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Fullstack from '../Fullstack';
import Projects from '../Projects';
import Achievements from '../Achievements';
import Footer from '../Footer';



function  HomePage() {
	
	return (
		<>
			
			<HeroSection/>
			
			<Projects/>

			<Fullstack/>
			<Achievements/>
			<Footer/>
		</>
	);
}
export default HomePage;

