import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Fullstack from '../Fullstack';
import Projects from '../Projects';
import Footer from '../Footer';



function  HomePage() {
	
	return (
		<>
			
			<HeroSection/>
			<Projects/>
			<Fullstack/>
			<Footer/>
		</>
	);
}
export default HomePage;

