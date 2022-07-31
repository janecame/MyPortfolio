import React from 'react';
import './project.css';
import './tooltip.css';
import { IoCodeSlash, IoPeople, IoCalendar, IoArrowForward } from 'react-icons/io5';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Project = (props) => {

	const programArray = props.projectLanguage;
	const peopleArray = props.projectMembers;
	const featureArray = props.projectFeatures;
	const photoArray = props.projectPhotos;

return(
	<div className="project">
		<div className="project-container">
			
			<div className="project-wrapper">
				<div className="project-box project-heading">
					<div className="project-title">
						<h1>{props.projectTitle}</h1>
						<p><IoCalendar/> Started At: 09/02/2019 <IoArrowForward /> Ended: 09/02/2019 </p>
					</div>
					<div>
						
					</div>
					
				</div>
				<div className="project-box project-img">
					<div className="project-photo">
						
							<div className="card-carousel">
								<Carousel dynamicHeight={true}>
								{photoArray?.map((projectP) => 
				                	<div>
							          <img src={projectP} alt="..." key={projectP}/>

							        </div>
							    )}

				                
				            </Carousel>
						
						</div>
					</div>
				</div>
				<div className="project-box project-feature">
					{featureArray?.map((feature, i) => 
						    <div className={"" + (i === 0 ? "active" : "")}>
						        {feature}
						    </div>
					)}
						
				</div>
				<div className="project-box project-program">
					<p><IoCodeSlash /> Language:</p>
					<div className="wrap-language">
						  	{programArray?.map((img, i) => 
						        <div className={"project-program-icon " + (i === 0 ? "active" : "")}>
						          <img src={img} alt="..." key={img}/>
						        </div>
						    )}
					</div>

					<p><IoPeople /> Team Members:</p>
					<div className="wrap-language">
						  	{peopleArray?.map((people, i) => 
						        <div className={"people-icon " + (i === 0 ? "active" : "")}>
						          <img src={people} alt="..." key={people}/>
						        </div>
						    )}
					</div>

				</div>
				<div className="project-box project-desc">
					{props.description}

				</div>

			</div>
		</div>

	</div>
);

}
export default Project;