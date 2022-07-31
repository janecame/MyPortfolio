import React from 'react';
import Card from './CardProject';
import './CardProject.css';
import { bmathquest, onlineadmission } from './ImageIcons';
import { IoNewspaper, IoPeople, IoChatbox, IoFileTrayFull, IoPerson, IoAnalytics, IoTrophy, IoSpeedometer, IoGameController } from 'react-icons/io5';


const Projects = () => {

return(
	<>
		<div className="projects">
			<div className="text-title">
				<h1>Projects</h1>
			</div>
			
			<div className="wrapper">
				 <Card 
				 	title="Online Admission Management System with SMS Technology for STI West Negros University"
				 	imgbody= { onlineadmission }
				 	imglist={[<IoPeople />, <IoFileTrayFull />, <IoNewspaper />, <IoPerson />, <IoChatbox />, <IoAnalytics /> ]}

				 />
				 <Card 
				 	title="B-Math Quest"
				 	subTitle="B-Math Quest: Mobile Game Application of Grade School Students for Living Stones International School"
				 	imgbody= { bmathquest }
				 	imglist={[<IoPeople />, <IoPerson />, <IoAnalytics />, <IoTrophy />, <IoSpeedometer />, <IoGameController /> ]}

				 />	
			</div>
		</div>

		
	</>

);

}
export default Projects;