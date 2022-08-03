import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
//import IoAlbums from 'react-icons/io5';
import { IoPlay, IoCodeSlashOutline, IoSchool } from 'react-icons/io5';
import  { Circle } from '../Figures';
import Footer from '../Footer';

const JourneyPage = () => {
return(
	<div className="journey">
		<Circle boxPosition='position-top-left' />
		<VerticalTimeline>
			<VerticalTimelineElement
			    className="vertical-timeline-element--work"
			    contentStyle={{ background: 'rgb(0, 98, 225)', color: '#fff' }}
			    date="2022 - Present"
			    iconStyle={{ background: 'rgb(0, 98, 225)', color: '#fff' }}
				icon={<IoCodeSlashOutline />}
			  >
			    <h3 className="vertical-timeline-element-title">Programmer role</h3>
			    <h4 className="vertical-timeline-element-subtitle">Ongoing Capstone Development for the course</h4>
			    <p>
			      Entitled: B-Math Quest: Mobile Game Application of Grade
					 School Students for Living Stones 
					International School
			    </p>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
			    className="vertical-timeline-element--work"
			    contentStyle={{ background: 'rgb(88, 0, 255)', color: '#fff' }}
			    date="2019 - Present"
			    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				icon={<IoSchool />}
			  >
			    <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science</h3>
			    <h4 className="vertical-timeline-element-subtitle">Ongoing Third Year College Student</h4>
			    <p>
			      Study at STI West Negros University
			    </p>
			  </VerticalTimelineElement>

			  <VerticalTimelineElement
			    className="vertical-timeline-element--work"
			    contentStyle={{ background: 'rgb(224, 0, 180)', color: '#fff' }}
			    date="2018 - 2019"
			    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				icon={<IoSchool />}
			  >
			    <h3 className="vertical-timeline-element-title">Senior High School Graduate</h3>
			    <h4 className="vertical-timeline-element-subtitle">Senior High School Diploma</h4>
			    <p>
			      Senior High School Graduate At STI West Negros University, School Year 2018-2019
			    </p>
			  </VerticalTimelineElement>


			  <VerticalTimelineElement
			    className="vertical-timeline-element--work"
			    contentStyle={{ background: 'rgb(0, 98, 225)', color: '#fff' }}
			    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
			    date="2018 - 2019"
			    iconStyle={{ background: 'rgb(0, 98, 225)', color: '#fff' }}
			    icon={<IoCodeSlashOutline />}
			  >
			    <h3 className="vertical-timeline-element-title">Programmer role</h3>
			    <h4 className="vertical-timeline-element-subtitle">STI West Negros University, Bacolod City</h4>
			    <p>
			      Developed Online Admission Management System with SMS Technology for STI West Negros University
			    </p>
			  </VerticalTimelineElement>

			  <VerticalTimelineElement
			    className="vertical-timeline-element--work"
			    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
			    date="2017 - 2019"
			    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
			 	icon={<IoSchool />}
			  >
			    <h3 className="vertical-timeline-element-title">Senior high school student</h3>
			    <h4 className="vertical-timeline-element-subtitle">STI West Negros University, Bacolod City</h4>
			    <p>
			      Information Technology Mobile Application Web Development
			    </p>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
			    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
				icon={<IoPlay />}
			  />

			</VerticalTimeline>
			<Footer />
		</div>

);

}
export default JourneyPage;