import React from 'react';
import Footer from '../Footer';
import Project from '../Project';

import * as ImageIcons from '../ImageIcons';
import { UserManagement, 
		ProfileManagement, 
		InformationBoard, 
		SlotReservation, 
		ReportGeneration, 
		SMSNotification, 
		PlayerManagement,
		Gameperformance,
		AchievementMonitoring 

} from '../Features';


const ProjectPage = () => {



return(
	<>
		<Project 
			projectTitle="Online Admission Management System with SMS Technology for STI West Negros University"
			projectPhotos={[ImageIcons.onlineadmission, ImageIcons.login1, ImageIcons.form1, ImageIcons.table1]}
			imgTitle="Academic track strand list"
			projectFeatures={[<UserManagement />,
							  <InformationBoard />, 
				 		      <ProfileManagement />, 
				 		      <SlotReservation />, 
				 		      <SMSNotification />,
				 		      <ReportGeneration />
				 		    ]}

			projectMembers={[ImageIcons.athena, ImageIcons.nicole, ImageIcons.rodrigo, ImageIcons.bryan, ImageIcons.zhian,
							 ImageIcons.jamelch, ImageIcons.von, ImageIcons.jamie, ImageIcons.russel, ImageIcons.eddie ]}

			projectLanguage={[ImageIcons.html, ImageIcons.css, ImageIcons.js, ImageIcons.mysql, ImageIcons.php]}
			description="ontrary to popular belief, Lorem Ipsum is not simply random text. It has 
					roots in a piece of classical Latin literature from 45 BC, making it over 
					2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney C
					ollege in Virginia, looked up one of"

		/>
		<Project 
			projectTitle="B-Math Quest"
			projectPhotos={[ImageIcons.bmathquest, ImageIcons.bmathquestgame, ImageIcons.bmathquestweb]}
			projectFeatures={[<UserManagement />,
				 		      <ProfileManagement />,
				 		      <ReportGeneration />,
				 		      <PlayerManagement />,
				 		      <Gameperformance />,
				 		      <AchievementMonitoring />
				 		    ]}

			projectLanguage={[ImageIcons.html, ImageIcons.css, ImageIcons.js, ImageIcons.sqlite, ImageIcons.php]}
			projectMembers={[ImageIcons.zhian, ImageIcons.jerod, ImageIcons.rodrigo, ImageIcons.palses, ImageIcons.chou ]}
			description="ontrary to popular belief, Lorem Ipsum is not simply random text. It has 
					roots in a piece of classical Latin literature from 45 BC, making it over 
					2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney C
					ollege in Virginia, looked up one of"

		/>


		<Footer />
	</>

);

}
export default ProjectPage;