import './achievements.css';
import React from 'react';
import CardAchievement from './CardAchievement';
import { 	IoAnalytics,
			IoSchool,
			IoRibbon,
			IoMedal,
			IoLocation 
		} from 'react-icons/io5';


import * as ImageIcons from './ImageIcons';


const Achievements = () => {


	return (
		<>
		<div className="achievements">
			<div className="achieve-wrapper">
				<div className="page-title">
					<h1>ACHIEVEMENTS</h1>
				</div>
				
				<div className="achieve-section">
					<h2><IoRibbon /> Certificates</h2>

					<div className="wrapper py">
						<CardAchievement
							title="Huawei Math Basics"
							imgbody={[ImageIcons.huaweiCertificate] }
							date="August 1, 2022"
						/>

						<CardAchievement
							title="Google Digital Garage"
							imgbody={[ImageIcons.digitalgarage] }
							date="March 12, 2020"
						/>

						<CardAchievement
							title="2D Game development using unity and photoshop"
							imgbody={[ImageIcons.unityGame] }
							date="Aug 1, 2022"
						/>
						
					</div>
				</div>
				<div className="achieve-section">
				<h2><IoMedal />  Awards</h2>
					<div className="wrapper py">
						<h2>NO AWARDS</h2>
						

					</div>
				</div>
				<div className="achieve-section">
					<h2><IoSchool />  Education</h2>
					<div className="wrapper py">
						<div className="simple-card">
							<p><IoRibbon /> Information Technology Mobile App Web development - Senior High School Diploma</p> 
							<p><IoSchool /> STI West Negros University</p> 
						    <p><IoLocation /> Bacolod City</p>
						</div>
						<div className="simple-card">
							<p><IoRibbon /> Certificate of Completion</p> 
							<p><IoSchool /> Paglaum Village National High School</p> 
						    <p><IoLocation /> Bacolod City, Brgy. Mansilingan, Paglaum Village</p>
						</div>
					</div>
				</div>
				<div className="achieve-section">
					<h2><IoAnalytics/>  Experience</h2>
					<div className="wrapper py">
						<div className="simple-card">
							<p>80 hrs. of OJT (on the job training) at the Office of the Provincial Agriculturist 
							(OPA) as a data encoder</p> 
						
						</div>
					</div>
						
				</div>
			</div>
		</div>

		</>
	);
}
export default Achievements;